//to create an instance of ProductsController Class
const feedsControl = new feedController();

function loadData() {
  //add Items to the ProductionController Class - items currently are hard coded into the class
  feedsControl.addItem(
    "IMG/protection-mask-male.png",
    "Seah David",
    "Male",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quore cusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.",
    "5mins ago"
  );

  feedsControl.addItem(
    "IMG/protection-mask-male.png",
    "Tan Chong Kai",
    "Male",
    "adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit!",
    "1 hour ago"
  );

  feedsControl.addItem(
    "IMG/protection-mask-male.png",
    "Yung Keong",
    "Male",
    "Lorem ipsum dolor sit amet consectetur dfsdlfksl fkdsjfaiixkjflksfj tates.",
    "2 hours ago"
  );

  feedsControl.displayItem();
}
loadData();
