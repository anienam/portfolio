// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll(".nav-link, .nav-cta").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
