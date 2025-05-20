// $(document).ready(function () {
//   $("p").click(function () {
//     $(this).hide();
//   });
// });

$(document).ready(function () {
  $("#p2").mousedown(function () {
    $(this).hide();
  });
});

$("input").blur(function () {
  $(this).css("background-color", "black");
});

$(document).ready(function () {
  $("p").on({
    mouseenter: function () {
      $(this).css("background-color", "red");
    },
    mouseleave: function () {
      $(this).css("background-color", "green");
    },
    click: function () {
      $(this).css("background-color", "brown");
    },
  });
});
