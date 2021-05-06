// For Contact Us

var feedbackList = [];

function submitFeedback() {
  //Pass the input values to variables

  var uName = document.querySelector("#user_name").value;
  var uEmail = document.querySelector("#user_email").value;
  var uFback = document.querySelector("#fback_text").value;

  addFeedback(uName, uEmail, uFback);

  //Closing and clearing the modal after feedback is submitted

  $("#feedbackModal").modal("hide");

  $("#feedbackModal").on("hidden.bs.modal", function () {
    $("#feedbackForm")
      .find('input[type="text"], input[type="email"], textarea')
      .val("");
  });

  //Showing alert message after feedback is submitted
  document.getElementById("nav-bar").innerHTML += `<div class="fixed-top">
  <div class="alert alert-success alert-dismissible mx-4 mt-2">
  <button type="button" class="close" data-dismiss="alert">×</button>
  <strong>Thank you!</strong> We appreciate your valuable feedback!
  </div>
  </div>`;

  //Auto close the alert message after 2 seconds
  window.setTimeout(function () {
    $(".alert")
      .fadeTo(1000, 0)
      .slideUp(1000, function () {
        $(this).remove();
      });
  }, 2000);
}

function addFeedback(uName, uEmail, uFback) {
  var time = new Date(),
    day = time.getDate(),
    month = time.getMonth() + 1,
    year = time.getFullYear(),
    hour = time.getHours(),
    minutes = time.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var feedbackTime =
    day + "/" + month + "/" + year + " " + hour + ":" + minutes;

  const item = {
    i_name: uName,
    i_email: uEmail,
    i_fback: uFback,
    i_time: feedbackTime,
  };

  feedbackList.push(item);

  listFeedback();
}

function listFeedback() {
  console.log(`Total number of Feedbacks ${feedbackList.length}`);
  console.log(feedbackList);
}
// End for Contact Us
