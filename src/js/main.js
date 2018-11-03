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

  $('.main-navigation li').click( function() {
    $('.main-navigation li').removeClass('active');
    $(this).addClass('active');
  });

// Переключение текста в блоке "Услуги Гранд-Вет"

  $('.slide-box').click( function() {
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

  // Скрипты для Services.page

  // Добавление и удаление стилей при ресайзе или для экранов телефонов и планшетов

  $(window).resize( function() {

    var windowWidth = $(window).width();


    if ( windowWidth <= 768 ) {
      $('.diagnostic, .surgery').addClass('responsive').removeClass('active');
      $('.diagnostic ul, .surgery ul').hide();
    }
    else {
      $('.diagnostic, .surgery').removeClass('responsive');
      $('.diagnostic ul, .surgery ul').show();
    }

    if ( windowWidth <= 576 ) {
      $('.therapy').addClass('responsive').removeClass('active');
      $('.therapy ul').hide();
    }
    else {
      $('.therapy').removeClass('responsive');
      $('.therapy ul').show();
    }

  }).trigger('resize');

  // Выпадающие меню для телефонов и планшетов

  function listToggle( target ) {
    var lists = $('.responsive');

    for ( var i = 0; i < lists.length; i++ ) {
      if ( $(lists[i]).is(target) ) {
        $(lists[i]).toggleClass('active').find('ul').slideToggle();
      }
      else {
        $(lists[i]).removeClass('active').find('ul').slideUp();
      }
    }
  }

  function responsiveWidth( obj ) {
    if ( obj.hasClass('responsive') ) {
      listToggle( obj );
    }
  }

  $('.diagnostic').click( function() {
    responsiveWidth( $(this) );
  });

  $('.surgery').click( function() {
    responsiveWidth( $(this) );
  });

  $('.therapy').click( function() {
    responsiveWidth( $(this) );
  });


});