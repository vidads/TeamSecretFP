const feedHTMLList = (name, nTitle, title, text, time) => 
`<div class="card dcy-card">
            <div class="card-header">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="mr-2">
                    <img
                      class="rounded-circle"
                      width="45"
                      src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
                      alt=""
                    />
                  </div>
                  <div class="ml-2">
                    <div class="h5 m-0">${name}</div>
                    <div class="h7 text-muted">${nTitle}</div>
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
                <i class="fa fa-clock-o"></i>${time}
              </div>
              <a class="card-link" href="#">
                <h5 class="card-title">
                  ${title}
                </h5>
              </a>

              <p class="card-text">
                ${text}
              </p>
            </div>
            <div class="card-footer">
              <a href="#" class="card-link"
                ><i class="fa fa-gittip"></i> Like</a
              >
              <a href="#" class="card-link"
                ><i class="fa fa-comment"></i> Comment</a
              >
              <a href="#" class="card-link"
                ><i class="fa fa-mail-forward"></i> Share</a
              >
            </div>
          </div>`;

class feedController {
  constructor() {
    this._items = [];
  }
  
  //method to add the items into the array
  addItem(name, nTitle, title, text, time) {
    const itemObj = {
      oName: name,
      onTitle: nTitle,
      oTitle: title,
      oText: text,
      oTime: time,
    };
    this._items.push(itemObj);
}
    
    displayItem() {
    var afeedHTMLList = [];
    for (var i = 0; i < this._items.length; i++) {
      const item = this._items[i];
      const feedHTML = feedHTMLList(
        item.oName,
        item.onTitle,
        item.oTitle,
        item.oText,
        item.oTime
      );
      afeedHTMLList.push(feedHTML);
    }
      const pFeed = afeedHTMLList.join(`\n`);
    document.querySelector(".PostContent").innerHTML = pFeed;
  }
}