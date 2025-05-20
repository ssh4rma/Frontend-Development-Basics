$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $("#p2").mousedown(function () {
    $(this).hide();
  });
});

$("input").blur(function () {
  $(this).css("background-color", "black");
});
