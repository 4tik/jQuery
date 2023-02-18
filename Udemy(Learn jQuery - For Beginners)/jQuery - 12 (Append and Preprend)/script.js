console.log("working..........");

$(document).ready(function () {
  $("#append-li").click(function () {
    $("ol").append("<li>list append</li>");
  });

  $("#preprend-li").click(function () {
    $("ol").prepend("<li>list prepend</li>");
  });
});
