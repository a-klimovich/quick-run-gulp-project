(() => {
  $(document).ready(function () {
    const input = $(".counter-input");
    const minusBtn = $(".counter-btn.minus");
    const plusBtn = $(".counter-btn.plus");
    const placeInput = $("#placeInput");
    const cityInput = $("#cityInput");

    //* hide usles input
    // const toggleInputDelivery = (node) => {
    //   if (node.val() === "delivery") {
    //     placeInput.hide();
    //     cityInput.show();
    //   } else {
    //     placeInput.show();
    //     cityInput.hide();
    //   }
    // }

    minusBtn.on("click", function () {
      let currentValue = parseInt(input.val());
      if (currentValue > 0) {
        input.val(currentValue - 1);
      }
    });

    plusBtn.on("click", function () {
      let currentValue = parseInt(input.val());
      if (currentValue < 999) {
        input.val(currentValue + 1);
      }
    });
    
    //* hide usles input
    // toggleInputDelivery($(this));

    // $('input[name="delivery_method"]').change(function() {
    //   toggleInputDelivery($(this));
    // });
  });
})();
