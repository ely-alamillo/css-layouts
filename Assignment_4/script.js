document.body.style.backgroundColor = "#FF0000";

document.getElementsByTagName("h1")[0].style.backgroundColor = "#0000FF";

document.body.style.fontFamily = "sans-serif";

// creates array of all li items
var li = document.getElementsByTagName('li');



// itirates to li items and adds class of 'listItem'
for (var i = 0; i < li.length; i++) {

  li[i].classList.add('listItem');

}


// to do
// Create a new img element and set its src attribute to a picture of you.
// Append that element to the page.
