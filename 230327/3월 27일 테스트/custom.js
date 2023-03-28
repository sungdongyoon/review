$(function () {
  /* Slick Slider */
  $(".main_photo_image").slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });
  $(".project_one_left_image").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToScroll: 1,
  });
  $(".project_two_right_image").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2700,
    slidesToScroll: 1,
  });
});
