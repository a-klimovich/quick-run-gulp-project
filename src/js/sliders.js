
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

  
  const slidesInRow = () => {
    const countSlides = $('#brand-logo-slider .brand-logo-slide')?.length;
    const screenSize = $(window)[0].innerWidth;
    const rowOnMobile = 3;

    if (screenSize <= 768) {
      return rowOnMobile;
    }
    if (screenSize <= 1200) {
      return countSlides / 4;
    }
    if (screenSize >= 1200) {
      console.log(21);
      return countSlides / 6;
    }
  };

  $('#brand-logo-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    infinite: false,
    rows: slidesInRow(),
    appendDots: $('#brand-logo-slider'),
    customPaging: function(slider, i) {
      return '<button class="slick-progress" role="button" data-slide="' + i + '"></button>';
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        }
      }
    ]
  })
  $('.slick-progress').click(function() {
    var index = $(this).data('slide');
    $('.slider').slick('slickGoTo', index);
  });
});
	