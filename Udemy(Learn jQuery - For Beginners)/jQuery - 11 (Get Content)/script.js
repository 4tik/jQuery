console.log("working..........");

$(document).ready(function () {
  $("#show-text").click(function () {
    var text = $("#get-content").text();
    $("#output").text(text);
  });

  $("#show-html").click(function () {
    var html = $("#get-content").html();
    $("#output").text(html);
  });

  $("#get-value").click(function () {
    $("#output").text($("#get-name").val());
  });

  $("#show-attr").click(function () {
    $("#output").text($("#get-attr").attr("href"));
  });

  $("#change-attr").click(function () {
    $("#get-attr").attr("href", "https://trello.com/");
    $("#output").text($("#get-attr").attr("href"));
  });
});
