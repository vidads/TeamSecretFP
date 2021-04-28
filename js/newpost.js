//on save when username and gender entered
function saveinfo() {
  var userName = document.getElementById("username").value;
  localStorage.setItem("username", userName);
  document.getElementById("username1").innerHTML = localStorage.getItem(
    "username"
  );

  var userSex = document.querySelector('input[name="gender"]:checked').value;
  localStorage.setItem("gender", userSex);
  document.getElementById("gender1").innerHTML = localStorage.getItem("gender");

  if (localStorage.getItem("gender") == "Male") {
    document.getElementById("gender2").src = "IMG/protection-mask-male.png";
  } else
    document.getElementById("gender2").src = "IMG/protection-mask-female.png";
}

// onload form for username and gender
$(window).on("load", function () {
  $("#myModal").modal("show");
});

// load view image to be posted
var loadFile = function (event) {
  var output = document.getElementById("load2");
  output.src = URL.createObjectURL(event.target.files[0]);
};
