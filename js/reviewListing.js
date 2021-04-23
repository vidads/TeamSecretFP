//To create an instance of ReviewController Class
const reviewsControl = new ReviewsController();

function loadData()  //add Items to the ReviewsController Class - items currently are hard coded into the class
//name : Jean Looi
//review : Very good webpage

{
    //add Items to the ReviewController Class - items currently are hard coded into the class
    reviewsControl.addItem("Jean Looi", '"They are applying what they learnt on their website"');

    reviewsControl.addItem("Ida", '"Their soft skills are top notch!"');

    reviewsControl.addItem("Bryan Chew", '"They are always asking me for help :("');

    reviewsControl.addItem("Dave", '"They are so happy after receiving their student card! haha "');

    reviewsControl.displayItem();
}
loadData();