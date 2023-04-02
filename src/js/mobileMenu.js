// Mobile menu functionality
(function () {
  // Get required elements
  const header = document.querySelector('.header');
  const showPhoneBtn = document.querySelector("#show-phone-btn");
  const openMobileMenuBtn = document.querySelector("#open-mobile-menu-btn");
  const mobileMenuHeadTitle = document.querySelector(".mobile-menu-head .title");
  const mobileMenuCloseBtn = document.querySelector("#mobile-menu-closer");
  const buttons = document.querySelectorAll(".open-submenu-btn");

  const headerHeight = header.offsetHeight;
  const body = document.body;
  
  // ? uncomment added stiky header
  // window.addEventListener('scroll', () => {
  //   if (window.pageYOffset > headerHeight) {
  //     header.style.position = 'fixed';
  //     header.style.top = '0';
  //     body.style.paddingTop = `${headerHeight}px`;
  //   } else {
  //     header.style.position = '';
  //     header.style.top = '-20vh';
  //     body.style.paddingTop = '';
  //   }
  // });

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