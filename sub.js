$(function() {

    $('.show').click(function() {
      const $answer = $(this).find('.answer');
      const $up = $(this).find('.fa-chevron-up');
      const $down = $(this).find('.fa-chevron-down');
      if ($answer.hasClass('kw')) {
        $answer.removeClass('kw');
        $answer.slideUp();
        $(this).find('span').text('+');
      } else {
        $answer.addClass('kw');
        $answer.slideDown();
        $(this).find('span').text('-');
      }
  
    });
  
    $('header a').click(function() {
      const id = $(this).attr('href');
      const position = $(id).offset().top;
      $('html, body').animate({
        'scrollTop': position
      }, 500);
    });
    $('#page_top a').click(function() {
      $('html, body').animate({
        'scrollTop': 0
      }, 500);
    });
  
  
  
  });
  