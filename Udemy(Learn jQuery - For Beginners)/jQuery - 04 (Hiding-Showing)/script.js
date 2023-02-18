console.log("working..........");
$(document).ready(function () {
  $("#hidden").click(function () {
    $("h2").hide(1000);
    $("#hidden").hide();
    $("show").show(1000);
  });

  $("#show").click(function () {
    $("h2").show(1000);
    $("show").hide();
    $("#hidden").show(1000);
  });
});
