$(function(){
  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 1000,
    arrows: false,
  });

    //マウスのホバー Myprofile
    $('#nav1').hover(
      function(){
        //マウスが重なった時の処理
        $(this).css('opacity', '0.5');
      },
      function(){
        //マウスが離れたときの処理
        $(this).css('opacity', '1');
      }
    );

   //マウスのホバー about
    $('#nav2').hover(
      function(){
        //マウスが重なった時の処理
        $(this).css('opacity', '0.5');
      },
      function(){
        //マウスが離れたときの処理
        $(this).css('opacity', '1');
      }
    );
    
    //マウスのホバー works
    $('#nav3').hover(
      function(){
        //マウスが重なった時の処理
        $(this).css('opacity', '0.5');
      },
      function(){
        //マウスが離れたときの処理
        $(this).css('opacity', '1');
      }
    );

  //画面をスクロールしたときにTOPボタンを表示
    $(window).scroll(function(){
      if($(window).scrollTop() >= 100){
        $('#backButton').css('display', 'none');
      }
      else{
        $('#backButton').css('display', 'inline');
      }
    });


   // ページ内スクロール
   //これは汎用、コピペでOK
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //スクロールしたときにdivをフェードイン
  $(window).scroll(function(){
    var about =$('.about').offset().top;
    var works = $('.works').offset().top;
    var scroll = $(window).scrollTop();
    var windowsHeight = $(window).height();
    var windowsDisplayed = scroll + windowsHeight;
    
    if (about < windowsDisplayed){
      $('.about').addClass('fadeIn');
    }
    else{
      $('.about').removeClass('fadeIn');
    }

    if (works < windowsDisplayed){
      $('.works').addClass('fadeIn');
    }
    else{
      $('.works').removeClass('fadeIn');
    }
  });

  //モーダルバーション1　（どっちでもOK）
  /*$('.works img').click(function(){
    const imgSrc = $(this).attr('src');
    console.log(imgSrc);
    $('.bigimage').attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body, html').css('overflow-y', 'hidden');
    return false
  });*/
//  モーダルバーション2　（どっちでもOK）
  $('.item a').click(function(){
    var imgSrc = $(this).children().attr('src');
    console.log(imgSrc);
    $('.bigimage').children().attr('src', imgSrc);
    $('.bigimage').attr('src', imgSrc);
    $('.modal').fadeIn();
    /*$('body, html').css('overflow-y', 'hidden');*/
    return false
  });

  //モーダルの×印
  $('close-btn').click(function(){
    $('.modal').fadeOut();
    /*$('body, html').css('overflow-y', 'visible');*/
    return false
  });

});
