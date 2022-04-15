$('.info__inner-reviews-bottom-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: true,
          arrows: false,
          // swipe: true,
          fade:true,
        }
      }
    ]
  });