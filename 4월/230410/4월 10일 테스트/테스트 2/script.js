$(function() {
  let basicFontSize = 14;

  $(".zoomBtn button").on("click", zoomInOut);
  function zoomInOut() {
    if($(this).hasClass("zoomOutBtn")) {
      if(basicFontSize <= 8) return false;
      basicFontSize--;
    } else if($(this).hasClass("zoomInBtn")) {
      if(basicFontSize >= 20) return false;
      basicFontSize++;
    } else {
      basicFontSize = 14;
    }
    $(".fontSize").text(basicFontSize + "px");
    $("body").css({
      fontSize: basicFontSize + "px"
    });
  };
});