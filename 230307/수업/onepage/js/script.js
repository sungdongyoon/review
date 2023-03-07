$(function() {
  $('nav a').click(function(e) {
    $.scrollTo(this.hash || 0, 900);
    e.preventDefault();
  });
});