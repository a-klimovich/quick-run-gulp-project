(() => {
  $(document).ready(function () {
    const input = $(".counter-input");
    const minusBtn = $(".counter-btn.minus");
    const plusBtn = $(".counter-btn.plus");
    const placeInput = $("#placeInput");
    const deliveryPlaceInput = $("#deliveryPlaceInput");
    const cityInput = $("#cityInput");

    const toggleInputDelivery = (node) => {
      if (node.val() === "delivery") {
        placeInput.hide();
        deliveryPlaceInput.show();
        cityInput.show();
      } else {
        placeInput.show();
        deliveryPlaceInput.hide();
        cityInput.hide();
      }
    }

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
    
    toggleInputDelivery($(this));

    $('input[name="delivery_method"]').change(function() {
      toggleInputDelivery($(this));
    });
  });
})();
