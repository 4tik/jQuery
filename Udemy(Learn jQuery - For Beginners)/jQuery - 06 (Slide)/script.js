console.log("working..........");

$(document).ready(function () {
  $("#topbar").click(function () {
    //$("#panel").toggle(1000);

    $("#panel").slideDown(1000);
  });

  $("#slide-down").click(function () {
    $("#panel-up").slideUp(1000);
  });

  $("#slide-toggle").click(function () {
    $("#panel-toggle").slideToggle(1000);
  });
});
