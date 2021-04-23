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
    feedbackTime = `${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;

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
