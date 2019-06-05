$(".slider-blog").slick({
  // centerMode: true,
  slidesToShow: 3,
  speed: 1000,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  dots: true,
  arrows: true,
  infinite: true,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        // centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
       
        // centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});
$(".clients").slick({
  // centerMode: true,
  slidesToShow: 4,
  speed: 1000,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  dots: true,
  arrows: true,
  infinite: true,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        // centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
       
        // centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});






( function( $ ) {
  const $document = $(document);
  
  const initTyped = (selector, options) => {
   let settings = options;
   if (!settings) {
    settings = {
     stringsElement: '#typed-content',
     typeSpeed: 60,
     backSpeed: 40,
     loop: true,
     showCursor: true
    };
   }
   
   let typed = new Typed(selector, settings);
  }
  
  $document.ready(() => {
   console.log('ready');
   
   initTyped('.js-typed');
  });
 })(jQuery);



  //menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  if (document.getElementById('default-select')) {
    $('select').niceSelect();
  }
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 