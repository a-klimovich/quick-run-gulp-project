
$(document).ready(function(){
  $('#workroom').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.workroom-arrow--prev'),
    nextArrow: $('.workroom-arrow--next'),
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
	