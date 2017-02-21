
$(document).ready(function () {

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    centerPadding: '11%',
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

/*  ----- STICKY FOOTER  -----*/

if ($(document).height() <= $(window).height())
  $("footer.footer").addClass("navbar-fixed-bottom");
