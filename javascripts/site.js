(function() {
  var html, retinaDisplay;

  retinaDisplay = typeof window.devicePixelRatio !== 'undefined' && window.devicePixelRatio > 1;

  html = document.getElementsByTagName('html')[0];

  html.className = retinaDisplay ? "js retina" : "js no-retina";

}).call(this);
