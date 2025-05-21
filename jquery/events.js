$(document).ready(function () {
  $("#p1").click(function () {
    $("#p2").fadeTo("slow", 0.15);
    $("#p1").fadeOut("slow");
  });
});
