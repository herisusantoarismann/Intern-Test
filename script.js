$(document).ready(function () {
  $("button").click(function (e) {
    const kata = document.querySelector("input").value;
    if (!kata) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan masukkan kata terlebih dahulu!",
      });
    }
    $("#hasil").text(kata.replace(/[AaIiUuEeOo]/g, ""));
  });

  $("input").keyup(function (e) {
    const kata = document.querySelector("input").value;
    $("#real-time").text(kata);
    if (e.keyCode === 13) {
      $("button").click();
    }
  });

  $("input").on("focusin", function () {
    $(this).parent().find("label").addClass("active");
  });

  $("input").on("focusout", function () {
    if (!this.value) {
      $(this).parent().find("label").removeClass("active");
    }
  });
});
