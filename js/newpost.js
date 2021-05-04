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
    var genderImg = "IMG/protection-mask-male.png";
    localStorage.setItem("genderImg", genderImg);
  } else {
    document.getElementById("gender2").src = "IMG/protection-mask-female.png";
    var genderImg = "IMG/protection-mask-female.png";
    localStorage.setItem("genderImg", genderImg);
  }
  $("#myModal").modal("hide");
}

function saveinfo2() {
  var userMsg = document.getElementById("message").value;
  localStorage.setItem("message", userMsg);

  var cDate = new Date();
  localStorage.setItem("cDate", cDate);
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

var elephant = document.getElementById("load2");

// Take action when the image has loaded
elephant.addEventListener(
  "load",
  function () {
    var imgCanvas = document.createElement("canvas"),
      imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    imgCanvas.width = elephant.width;
    imgCanvas.height = elephant.height;

    // Draw image into canvas element
    imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
      localStorage.setItem("elephant", imgAsDataURL);
    } catch (e) {
      console.log("Storage failed: " + e);
    }
  },
  false
);

//generate new post box
const textarea = document.querySelector("#message");
const submitBtn = document.querySelector("#submitBtn");
const commentBox = document.querySelector(".PostContent");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let comment = textarea.value;

  if (!comment) {
    return;
  }

  postComment(comment);
});

function postComment(comment) {
  //Append to dom
  let data = {
    username: localStorage.getItem("username"),
    gender: localStorage.getItem("gender"),
    genderImg: localStorage.getItem("genderImg"),
    comment: comment,
    imageUrl: localStorage.getItem("elephant"),
  };

  appendToDom(data);
  //Broadcast
  //Sync with MySql
}

function appendToDom(data) {
  let lTag = document.createElement("div");
  lTag.classList.add("comment");

  let markup = `
  <div class="card dcy-card">
  <div class="card-header">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex justify-content-between align-items-center">
        <div class="mr-2">
          <img
            class="rounded-circle"
            width="45"
            src="${data.genderImg}"
            alt=""
          />
        </div>
        <div class="ml-2" id="card_header">
          <div class="h5 m-0">${data.username}</div>
          <div class="h7 text-muted">${data.gender}</div>
        </div>
      </div>
      <div>
        <div class="dropdown">
          <button
            class="btn btn-link dropdown-toggle"
            type="button"
            id="dcy-drop1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-ellipsis-h"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dcy-drop1"
          >
            <div class="h6 dropdown-header">Configuration</div>
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Hide</a>
            <a class="dropdown-item" href="#">Report</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card-body">
    <div class="text-muted h7 mb-2">
      <i class="fa fa-clock-o"></i>Now
    </div>
    <p class="card-text">
      ${data.comment}
    </p>
    <div class="box">
      <img id="load3" src="${data.imageUrl}" alt="" class="postimg" />
    </div>
  </div>
  <div class="card-footer">
    <a href="#" class="card-link"
      ><i class="fa fa-gittip"></i> Like</a
    >
    <a href="#" class="card-link"
      ><i class="fa fa-comment"></i> Comment</a
    >
    <a onclick="myFunction()" class="need-share-button-default" 
      ><i class="fa fa-mail-forward"></i> Share</a
    >
  </div>
  </div>
`;

  lTag.innerHTML = markup;
  commentBox.prepend(lTag);
}
