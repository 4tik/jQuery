console.log("working..........");

$(document).ready(function () {
  $("#add-tag").click(function () {
    $("#add-class").addClass("add-class");
  });

  $("#remove-tag").click(function () {
    $("#add-class").removeClass("add-class");
  });

  $("#toggle-tag").click(function () {
    $("#add-class").toggleClass("add-class");
  });
});
