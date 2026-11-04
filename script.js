// =========================================================
// PORTFOLIO JAVASCRIPT
// Arvie Joy Alvarez
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  // =======================================================
  // CURRENT YEAR
  // =======================================================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // =======================================================
  // MOBILE NAVIGATION
  // =======================================================

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );

    });


    // Close the menu when a navigation link is clicked
    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

      });

    });

  }

});