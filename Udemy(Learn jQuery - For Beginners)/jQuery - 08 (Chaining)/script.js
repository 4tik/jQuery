console.log("working..........");

$(document).ready(function () {
  $("button").click(function () {
    $("#animate-div").slideToggle(1000, function () {
      $("#animate-div").css("background-color", "red");
      $("#animate-div").slideDown(1000, function () {
        $("#animate-div").css("background-color", "#29465b");
      });
    });
  });
});
