/*
*クリックしたら円形拡大 
*/
$('.openbtn').click(function() {
  $(this).toggleClass('active');
  $('#g-nav').toggleClass('panel');
  $('.circle-bg').toggleClass('circle_active');
});

$('#g-nav a').click(function() {
  $('.openbtn').removeClass('active');
  $('#g-nav').removeClass('panel');
  $('.circle-bg').removeClass('circle_active');
});

/*
*リンクボタンをクリックしたら形状変化
*/
//スクロール時の動きを関数にまとめる
function PageTopAnime() {
  let scroll = $(window).scrollTop();
  if(scroll >= 100) {
    $('#page-top').removeClass('DownMove');
    $('#page-top').addClass('UpMove');
  } else {
    if($('#page-top').hasClass('UpMove')) {
      $('#page-top').removeClass('UpMove');
      $('#page-top').addClass('DownMove');
    }
  }
}

//#page-topをクリックした際の設定
$('#page-top').click(function() {
  let scroll = $(window).scrollTop();
  if(scroll > 0) {
    $(this).addClass('floatAnime');
    $('body, html').animate({
      scrollTop: 0
    }, 800, function() {
      $('#page-top').removeClass('floatAnime');
    });
  }
  return false;
});


/*
*横移動で全画面
*/
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // prevArrow: '<div class="slick-prev"></div>',
  // nextArrow: '<div class="slick-next"></div>',
  // dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

//スマホ用：スライダーをタッチしてもスライドを継続
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide) {
  $('.slider').slick('slickPlay');
});

/*
*複数枚画像をスライドさせる
*/
$('.slider2').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6900,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1.5,
      }
    }
  ]
});

/*
*アニメーション
*/
function fadeAnime() {
  //ふわっ
  $('.fadeInTrigger').each(function() {
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowH = $(window).height();
    if(scroll >= elemPos - windowH) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });

  //下からふわっ
  $('.fadeUpTrigger').each(function() {
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowH = $(window).height();
    if(scroll >= elemPos - windowH) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });

  //パタッ（左上）
  $('.flipLeftTopTrigger').each(function() {
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowH = $(window).height();
    if(scroll >= elemPos - windowH) {
      $(this).addClass('flipLeftTop');
    } else {
      $(this).removeClass('flipLeftTop');
    }
  });

  //パタッ（右上）
  $('.flipRightTopTrigger').each(function() {
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowH = $(window).height();
    if(scroll >= elemPos - windowH) {
      $(this).addClass('flipRightTop');
    } else {
      $(this).removeClass('flipRightTop');
    }
  });

  //拡大
  $('.zoomInTrigger').each(function() {
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowH = $(window).height();
    if(scroll >= elemPos - windowH) {
      $(this).addClass('zoomIn');
    } else {
      $(this).removeClass('zoomIn');
    }
  });
}


/*
*関数をまとめる
*/
//スクロール時に動かしたい場合
$(window).scroll(function() {
  PageTopAnime();
  fadeAnime();
});

//リロード後に動かしたい場合
$(window).on('load', function() {
  $('#splash-logo').delay(1200).fadeOut('slow');
  $('#splash').delay(1500).fadeOut('slow', function() {
    $('body').addClass('appear');

    let h = $(window).height();
    $('.splashbg').css({
      "border-width": h,
      "animation-name": "backBoxAnime"
    });
    PageTopAnime();
  });

  /*
  *背景が四隅に拡大
  */
  $('.splashbg').on('animationend', function() {
    fadeAnime();
  })
})

/*
*アニメーションPNG
*/
APNG.ifNeeded().then(function() {
  let images = document.querySelectorAll('.apng-image');
  for(let i = 0; i < images.length; i++)APNG.animateImage(images[i]);
})