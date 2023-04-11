(() => {
  $(".select").each(function () {
    const $select = $(this);
    const $head = $select.find(".select__head");

    $(".decore").closest(".select__head").addClass("has-decore");

    $head.on("click", function () {
      const $list = $(this).parent().find(".select__list");
      $(this).toggleClass("open");
      $list.toggleClass("open");
    });

    $select.on("click", ".select__item", function (e) {
      e.stopPropagation();
      const value = $(this).attr("data-value");
      const text = $(this).text();
      const $list = $(this).parent();
      const $input = $select.find(".select__input");
      const $value = $select.find(".chousen-value");
      $value.text(text);
      $list.removeClass("open");
      $head.removeClass("open");
      $input.val(value).trigger("change");
    });

    $(document).on("click", function (e) {
      if (!$select.has(e.target).length) {
        $head.removeClass('open')
        $select.find(".select__list").removeClass("open");
      }
    });
  });
})();
