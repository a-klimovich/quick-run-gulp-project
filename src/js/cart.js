(() => {
  $(document).ready(function () {
    // Get the input and buttons
    const input = $(".counter-input");
    const minusBtn = $(".counter-btn.minus");
    const plusBtn = $(".counter-btn.plus");

    // Subtract 1 from the input value when the minus button is clicked
    minusBtn.on("click", function () {
      let currentValue = parseInt(input.val());
      if (currentValue > 0) {
        input.val(currentValue - 1);
      }
    });

    // Add 1 to the input value when the plus button is clicked
    plusBtn.on("click", function () {
      let currentValue = parseInt(input.val());
      if (currentValue < 999) {
        input.val(currentValue + 1);
      }
    });
  });
})();
