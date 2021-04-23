// For Contact Us

var feedbackList = [];

function submitFeedback() {
  //Pass the input values to variables

  var uName = document.querySelector("#user_name").value;
  var uEmail = document.querySelector("#user_email").value;
  var uFback = document.querySelector("#fback_text").value;

  addFeedback(uName, uEmail, uFback);
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
