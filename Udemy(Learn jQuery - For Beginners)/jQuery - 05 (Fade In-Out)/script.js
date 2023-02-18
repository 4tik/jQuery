console.log("working..........");

$(document).ready(function () {
  $("#fadeIn").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn(1000);
    $("#div3").fadeIn(2000);
    $("#div4").fadeIn(3000);

    $("#fadeIn").hide();
    $("#fadeOut").show();
  });

  $("#fadeOut").click(function () {
    $("#div1").fadeOut(3000);
    $("#div2").fadeOut(2000);
    $("#div3").fadeOut(1000);
    $("#div4").fadeOut();

    $("#fadeIn").show();
    $("#fadeOut").hide();
  });

  $("#fadeToggle").click(function () {
    $("#div1").fadeToggle();
    $("#div2").fadeToggle(1000);
    $("#div3").fadeToggle(2000);
    $("#div4").fadeToggle(3000);
  });

  $("#fadeTo").click(function () {
    $("#div11").fadeTo(1000, 0.2);
    $("#div12").fadeTo(1000, 0.4);
    $("#div13").fadeTo(2000, 0.6);
    $("#div14").fadeTo(3000, 0.8);
  });
});
