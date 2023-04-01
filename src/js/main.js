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
  
  openModalBtn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  })

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
})();
