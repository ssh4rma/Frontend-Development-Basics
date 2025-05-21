$("#stopBtn").click(function () {
  $("#p2").stop(true, true);
  $("#p2").animate({ width: "300px", opacity: "0.8" }, "slow");
  $("#p2").animate({ height: "100px", opacity: "0.4" }, "slow");
  $("#p2").animate({ width: "100px", opacity: "0.8" }, "slow");
});
