$(document).ready(function () {
  $("#p1").click(function () {
    $("#p2").fadeToggle("slow");
    $("#p1").fadeOut(3000);
  });
});
