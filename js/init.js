(function($){
  $(function(){

    htmlSvg = new Walkway({
      selector: '#code',
      duration: '2000',
    });

    serverSvg = new Walkway({
      selector: '#server',
      duration: '2000',
    });    

    $('<img />').attr('src', '/img/bg.jpg');
    
    $("#header-text").delay(1000).fadeIn(800);

    $('.parallax').parallax();

    var options = [
      {selector: '#tech-skills', offset: 100, callback: 'showStaggeredList("#frontend-tech")' },
      {selector: '#backend-tech', offset: 0, callback: 'showStaggeredList("#backend-tech")' },
      {selector: '#code', offset: 150, callback: 'htmlSvg.draw()' },
      {selector: '#server', offset: 225, callback: 'serverSvg.draw()' },
    ];

    scrollFire(options);

    $('.modal-trigger').leanModal();

    $('a.contact-me').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 2500);
      return false;
    });
  });

})(jQuery);