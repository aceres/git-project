$(document).ready(function () {

  $(".error").html("");

  $(".btnLogin").click(function () {

    e = $("#username").val();
    p = $("#password").val();

    if ($("#username").val() == "Emineo1" && $("#password").val() == "1234") {
      window.location.href = "file:///Users/aceres/IdeaProjects/emineo/index.html";
    }
    if ($("#username").val() == "Emineo2" && $("#password").val() == "2345") {
      window.location.href = "file:///Users/aceres/IdeaProjects/emineo/index.html";
    }
    if ($("#username").val() == "Emineo3" && $("#password").val() == "3456") {
      window.location.href = "file:///Users/aceres/IdeaProjects/emineo/index.html";
    }
    else {
      $(".error").html("Anmeldung fehlgeschlagen!");
      return false;
    }
  });

});