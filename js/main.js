$(function() {
  // NavBar Burger Toggler
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('burger');
  });

  // Height of the Slider
  const sliderHeight = () => {
    $('.slider').css({ marginTop: $('.navbar').innerHeight() });
    $('.slider, .carousel-item').css({
      height: $(window).height() - $('.navbar').innerHeight(),
    });
  };
  sliderHeight();
  $(window).on('resize', function() {
    sliderHeight();
  });

  // Syncing the active class with the current section
  $(window).scroll(function() {
    $('section').each(function() {
      if ($(window).scrollTop() == 0) {
        $('.menu-item').removeClass('active');
      } else if ($(window).scrollTop() > $(this).offset().top - 1) {
        const sectionId = $(this).attr('id');
        $('.menu-item').removeClass('active');
        $(`.menu-item[href="#${sectionId}"]`).addClass('active');
      }
    });
  });

  // Go up
  $(window).scroll(function() {
    const position = $(this).scrollTop();
    if (position >= 400) {
      $('.go-up').fadeIn(400);
    } else {
      $('.go-up').fadeOut(400);
    }
  });
});

// Owl Carousel Section Slider

$('.owl-carousel').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    700: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
});
