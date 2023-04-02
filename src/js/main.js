// Vivus library example
const userIcon = document.getElementById("user");

if (userIcon) {
  new Vivus("user", {
    type: "scenario",
    duration: 100,
  });
}

// Modal functionality
(function () {
  // Get required elements
  const openModalBtn = document.querySelectorAll(".open-modal-btn");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close");
  const form = document.querySelector("form");

  // Add event listeners
  openModalBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Code to send form data to the server
    modal.style.display = "none";
  });
})();

// Mobile menu functionality
(function () {
  // Get required elements
  const header = document.querySelector('.header');
  const showPhoneBtn = document.querySelector("#show-phone-btn");
  const openMobileMenuBtn = document.querySelector("#open-mobile-menu-btn");
  const mobileMenuHeadTitle = document.querySelector(".mobile-menu-head .title");
  const mobileMenuCloseBtn = document.querySelector("#mobile-menu-closer");
  const buttons = document.querySelectorAll(".open-submenu-btn");

  const handleClearHeaderClass = (className) => {
    if (header.classList.contains(className)) {
      header.classList = "header";
    }
  }

  // Add event listeners
  showPhoneBtn.addEventListener("click", () => {
    handleClearHeaderClass("show-menu")
    header.classList.toggle("show-phone");
    mobileMenuHeadTitle.innerHTML = "ТЕЛЕФОН";
  });

  openMobileMenuBtn.addEventListener("click", () => {
    handleClearHeaderClass("show-phone")
    header.classList.toggle("show-menu");
    mobileMenuHeadTitle.innerHTML = "МЕНЮ";
  });

  mobileMenuCloseBtn.addEventListener("click", () => {
    header.classList = "header";
  });

  buttons.forEach((button) => {
    const parent = button.parentNode;
    const submenu = parent.querySelector("ul");
    if (!submenu) {
      button.style.display = "none";
    }

    button.addEventListener("click", () => {
      parent.classList.toggle("active");
    });
  });
})();