$(function() {

// Выпадающие меню в мобильной версии хедера

  $('.mobile-phone').click(function () {
    $(this).toggleClass('active');
    $('.contacts-info').toggleClass('active');
  });

  $('.mobile-menu').click(function () {
    $(this).toggleClass('active');
    $('.main-navigation').toggleClass('active');
  });

// Переключение страниц в меню хедера

  $('.main-navigation li').click(function () {
    $('.main-navigation li').removeClass('active');
    $(this).addClass('active');
  });

// Переключение текста в блоке "Услуги Гранд-Вет"

  $('.slide-box').click(function () {
    var slide = $(this).attr('data-target');
    $('.slide-box').removeClass('active');
    $(this).addClass('active');
    $('.service-description').removeClass('active');
    $('.service-description' + slide).addClass('active');
  });

// Настройки слайдеров

  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    touchMove: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.services-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.services-prev-arrow',
    nextArrow: '.services-next-arrow',
    touchMove: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews-content').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
    touchMove: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.partners-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
