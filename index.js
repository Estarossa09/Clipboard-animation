$(".clipboard").click(function () {
  $(this).addClass("copied");
  setTimeout(function () {
    $(".clipboard").removeClass("copied");
  }, 2000);
});
