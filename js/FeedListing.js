//to create an instance of ProductsController Class
const feedsControl = new feedController();

function loadData() {
  //add Items to the ProductionController Class - items currently are hard coded into the class
  feedsControl.addItem(
    "Seah David",
    "Always Noisy",
    "Lorem ipsum dolor sit amet, consectetur adip",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quore cusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.",
    "5mins ago",
  );

  feedsControl.addItem(
    "Tan Chong Kai",
    "Haiyo",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur deserunt illo esse distinctio.",
    "adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit!",
    "1 hour ago",
  );

  feedsControl.addItem(
    "Yung Keong",
    "Always very Tired",
    "Lorem ipsum dolor sit amet, consectetur.",
    "Lorem ipsum dolor sit amet consectetur dfsdlfksl fkdsjfaiixkjflksfj tates.",
    "2 hours ago",
  );
  
  feedsControl.displayItem();
}
loadData();
