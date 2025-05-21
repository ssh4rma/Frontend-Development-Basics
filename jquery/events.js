$("button").click(function () {
  var div = $("#p2");
  div.stop();
  div.animate({ width: "300px", opacity: "0.8" }, "slow");
  div.animate({ height: "100px", opacity: "0.4" }, "slow");
  div.animate({ width: "100px", opacity: "0.8" }, "slow");
});
