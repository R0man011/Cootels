$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  // закрытие в меню
  // $('.header__menu').click(function (event) {
  //   $('.header__burger,.header__menu').removeClass('active');
  //   $('body').removeClass('lock');
  // });
});

$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    infinity: true,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2200,
    pauseOnHover: true,
    touchThreshold: 10,
    touchMove: true,
  });
});