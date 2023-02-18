console.log("working..........");

$(document).ready(function () {
  $("button").dblclick(function () {
    $("strong").toggle();
  });

  //mouse enter and leave event

  $("#mouseEvent").mouseenter(function () {
    $("#mouseEvent").text("Mouse Enter");
    $("#mouseEvent").css("color", "green");
  });

  $("#mouseEvent").mouseleave(function () {
    $("#mouseEvent").text("Mouse Leave");
    $("#mouseEvent").css("color", "red");
  });

  $("#MdownUp").mousedown(function () {
    $("#MdownUp").text("Mouse is down");
  });

  $("#MdownUp").mouseup(function () {
    $("#MdownUp").text("Mouse Up");
  });

  //multiple mouse event

  $("span").on({
    mouseenter: function () {
      $(this).css("background-color", "yellow");
    },

    mouseleave: function () {
      $(this).css("background-color", "pink");
    },
    click: function () {
      $(this).css("background-color", "cyan");
    },
  });
});
