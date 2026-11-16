/* Accessible mobile navigation and footer year. */
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");
const menuLabel = toggle?.querySelector(".sr-only");

function closeMenu() {
  if (!toggle || !menu) return;

  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");

  if (menuLabel) menuLabel.textContent = "Open menu";
}

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));

    if (menuLabel) {
      menuLabel.textContent = isOpen ? "Close menu" : "Open menu";
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 781px)").matches) {
      closeMenu();
    }
  });
}

/* More Projects section toggle. */
const moreProjectsButton = document.getElementById("toggle-other-projects");
const otherProjectsSection = document.getElementById("other-projects");

if (moreProjectsButton && otherProjectsSection) {
  moreProjectsButton.addEventListener("click", () => {
    const isExpanded =
      moreProjectsButton.getAttribute("aria-expanded") === "true";

    otherProjectsSection.hidden = isExpanded;

    moreProjectsButton.setAttribute("aria-expanded", String(!isExpanded));

    moreProjectsButton.innerHTML = isExpanded
      ? 'More Projects <span aria-hidden="true">↓</span>'
      : 'Show Less <span aria-hidden="true">↑</span>';

    if (!isExpanded) {
      otherProjectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

/* Automatically update footer year. */
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
