// EXEMPLE lib Vivus
const userIcon = document.getElementById("user");

if (userIcon) {
  new Vivus("user", {
    type: "scenario",
    duration: 100,
  });
}

(function () {
  const openModalBtn = document.querySelectorAll(".open-modal-btn");
  const modal = document.querySelector(".modal");
  const header = document.querySelector(".header");

  openModalBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  const closeBtn = document.querySelector(".close");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // код для отправки данных формы на сервер
    modal.style.display = "none";
  });

  const showPhoneBtn = document.querySelector("#show-phone-btn");
  const mobileMenuHeadTitle = document.querySelector(".mobile-menu-head .title");

  showPhoneBtn.addEventListener("click", () => {
    header.classList.toggle("show-phone");
    mobileMenuHeadTitle.innerHTML = "ТЕЛЕФОН";
  });

  const mobileMenuCloseBtn = document.querySelector("#mobile-menu-closer");

  mobileMenuCloseBtn.addEventListener("click", () => {
    header.classList = "header";
  });
})();
