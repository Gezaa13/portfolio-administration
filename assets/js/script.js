if (window.innerWidth < 576) {
  $("#name").addClass("fs-2");
  $("#name").removeClass("fs-1");
} else {
  $("#name").addClass("fs-1");
  $("#name").removeClass("fs-2");
}

function unduh(file) {
  $("#loadingScreen").removeClass("d-none");
  $("#loadingScreen").addClass("d-flex");
  setTimeout(() => {
    $("#loadingScreen").removeClass("d-flex");
    $("#loadingScreen").addClass("d-none");

    const link = document.createElement("a");
    link.href = "../assets/docs/" + file;
    link.download = file;
    link.click();
  }, 10000);
}

function unduh2(file) {
  $("#loadingScreen").removeClass("d-none");
  $("#loadingScreen").addClass("d-flex");
  setTimeout(() => {
    $("#loadingScreen").removeClass("d-flex");
    $("#loadingScreen").addClass("d-none");

    const link = document.createElement("a");
    link.href = "../../assets/docs/" + file;
    link.download = file;
    link.click();
  }, 10000);
}
