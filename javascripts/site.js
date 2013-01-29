(function() {
  var html, retinaDisplay;

  retinaDisplay = typeof window.devicePixelRatio !== 'undefined' && window.devicePixelRatio > 1;

  html = document.getElementsByTagName('html')[0];

  html.className = retinaDisplay ? "js retina" : "js no-retina";

  $(function() {
    var scroll;
    html = $(html);
    scroll = function() {
      if ($(window).scrollTop() > 675) {
        return html.addClass('is-scrolled');
      } else {
        return html.removeClass('is-scrolled');
      }
    };
    scroll();
    return $(window).on('scroll', scroll);
  });

}).call(this);
