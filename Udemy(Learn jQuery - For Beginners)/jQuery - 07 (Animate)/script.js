console.log("working..........");
$(document).ready(function () {
  $("#start").click(function () {
    $("#animate-div").animate(
      { left: "800px", opacity: 0.25, height: "toggle" },
      3000
    );
  });

  $("#stop").click(function () {
    $("#animate-div").stop();
  });
});
