$(document).ready(function(){
  // menu on hover
  $('.navbar li').bind({
    mouseover: function(){
      $(this).children('.top-bar, .bottom-bar').css('visibility', 'visible');
    },
    mouseout: function(){
      $(this).children('.top-bar, .bottom-bar').css('visibility', 'hidden');
    }
  });



  //
  $('.namebox').click(function(){
    var target = $(this).data('box');
    var bgColor = $(this).css('background-color');

    //check background color of clicked button
    var isWhite = bgColor === 'rgb(255, 255, 255)' || bgColor === 'rgb(243, 243, 243)';

    bgColor = isWhite ? '#428e9e' : bgColor;

    $('.main-text').css('visibility', 'hidden'); //hide all .main-text
    $(target).css({'visibility':'visible', 'borderColor': bgColor}); //show THE only one
    $(target).children('h4').css('color', bgColor);
  });

  //Sticky top menu
  $(window).scroll(function(){
    var anchor = $('.menu-anchor').offset().top;

    if($(this).scrollTop() >= anchor && $('nav.navbar').css('position') !== 'fixed') {
      $('.navbar').addClass('fixed-top');
      $('.menu-anchor').css('height', $('nav.navbar').css('height')); //to avoid 'jumping' whole site
    }
    else if($(this).scrollTop() < anchor && $('nav.navbar').css('position') === 'fixed') {
      $('.navbar').removeClass('fixed-top');
      $('.menu-anchor').css('height', '0px'); //back to previous style
    }
  });


  // show cover over image, in specific resolution crop image too
  $('.photo').mouseover(function(){
    var color = $(this).children('.top-bar').css('background-color');
    $(this).children('.cover').css({'display':'block', 'color':color});

    if(window.innerWidth >= 768 && window.innerWidth <= 991) {
      $(this).children('img').css({
        width: '49%',
        clip: 'rect(0px 220px 200px 0px)',
        top: '0'
      });
    }
  });

  $('.cover').mouseout(function(){
    $(this).css('display', 'none');

    if(window.innerWidth >= 768 && window.innerWidth <= 991) {
      $(this).siblings('img').css({
        top: '-20px',
        width: '93%',
        clip: 'rect(40px auto 230px 0px )'
      });
    }
  });

  //Smooth scrolling
  $('.navbar a').click(function(){
    var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    return false;
  });
});
