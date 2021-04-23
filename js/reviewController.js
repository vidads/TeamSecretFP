//Doing a review section in the main page carousel
//Display the name and review

const createHTMLList = (name, review) =>

`
<div class="carousel-item">
    <div class="carousel-caption">
    <h3>${name}</h3>
    <p>${review}</p>
    </div>
</div>
`;

class ReviewsController
{

    constructor()
    {
        this._items = [];       //create an array to store the details of the review items
    }

    //method to add the items into the array
    addItem(name, review)
    {
        const itemObj = {
            oName: name,
            oReview: review,
        };

        this._items.push(itemObj);
    }

    displayItem()
    {
      var productHTMLList = [];
        for (var i = 0; i < this._items.length; i++)
        {

            const item = this._items[i];           //assign the individual item to the variable

            const productHTML = createHTMLList(
              item.oName, 
              item.oReview,
              );

            productHTMLList.push(productHTML);

        }

            //Join all the elements in my productHTMLList into one string, and separate by a break

            const pHTML = productHTMLList.join(`\n`);
            document.querySelector(".carousel_reviews").innerHTML = pHTML;

    }

}   //End of ReviewController class