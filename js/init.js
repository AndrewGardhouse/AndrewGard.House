(function($){
  $(function(){

    $("#header-text").delay(1000).fadeIn(800);

    $('.parallax').parallax();

    var options = [
      {selector: '#tech-skills', offset: 100, callback: 'showStaggeredList("#frontend-tech")' },
      {selector: '#backend-tech', offset: 0, callback: 'showStaggeredList("#backend-tech")' },
      {selector: '#code', offset: 150, callback: 'fadeInImage("#code")' },
      {selector: '#threedb', offset: 225, callback: "fadeInImage('#threedb')" },
    ];
    scrollFire(options);

    $('.modal-trigger').leanModal();
  });

})(jQuery); // end of jQuery name space