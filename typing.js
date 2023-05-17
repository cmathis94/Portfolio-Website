// List of sentences
var content = ['Web Developer', 'IT Consultant', 'Probably a nerd...'];

// Current sentence being processed
var part = 0;

// Character number of the current sentence being processed
var partIndex = 0;

// Holds the handle returned from setInterval
var intervalVaule;

// Element that holds the text
var element = document.querySelector('#text');

// Cursor element
var cursor = document.querySelector('#cursor');

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = content[part].substring(0, partIndex + 1);
  element.innerHTML = text;
  partIndex++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === content[part]) {
    // Hide the cursor
    cursor.style.display = '';

    clearInterval(intervalVaule);
    setTimeout(function () {
      intervalVaule = setInterval(Delete, 100);
    }, 1300);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = content[part].substring(0, partIndex - 1);
  element.innerHTML = text;
  partIndex--;

  // If sentence has been deleted then start to display the next sentence
  if (text === '') {
    clearInterval(intervalVaule);

    // If current sentence was last then display the first one, else move to the next
    if (part == content.length - 1) part = 0;
    else part++;

    partIndex = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      cursor.style.display = 'inline-block';
      intervalVaule = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
intervalVaule = setInterval(Type, 100);
