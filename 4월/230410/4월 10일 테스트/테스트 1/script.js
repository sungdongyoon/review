$(function() {
  $(".btn1 a").on("click", function() {
    $(".btn1 p").css({
      "background-color": "yellow",
    });
  });

  $(".btn2 a").on("click", function() {
    $(".btn2 a").attr("href", "https://www.naver.com"),
    $(".btn2 p").css({
      "background-color": "aqua",
    })
  })

  $(".btn3 button").on("dblclick", function() {
    $(".btn3 p").css({
      "background-color": "green",
    })
  })
})