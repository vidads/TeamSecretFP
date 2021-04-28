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

  $("#myModal").modal("hide");
}

// onload form for username and gender
$(window).on("load", function () {
  $("#myModal").modal("show");
  localStorage.clear();
});

// load view image to be posted
var loadFile = function (event) {
  var output = document.getElementById("load2");
  output.src = URL.createObjectURL(event.target.files[0]);
};

// For Username and gender form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   "use strict";
//   window.addEventListener(
//     "load",
//     function () {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName("needs-validation");
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener(
//           "button",
//           function (event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//             $("#modalName").modal("hide");
//           },
//           false
//         );
//       });
//     },
//     false
//   );
// })();
//End for Username and gender form validation
// $("#myModal").on("hide.bs.modal", function (e) {
//   // Submit data to server and in success callback write if to validate whether form data is valid or not .
//   if (invalidForm) {
//     e.preventDefault();
//   }
// });
