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