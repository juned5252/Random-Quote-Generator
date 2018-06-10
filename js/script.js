// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var message = ''
var result
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



// getRandomQuote returns a random quote object from the quotesArray
function getRandomQuote(){
  var rand = Math.floor(Math.random() * quotes.length);
  var output = quotes[rand];
  return output;
}

// printQuote builds a string from the getRandomQuote function and adds it to the DOM
function printQuote(){
  result = getRandomQuote();
  message = '<p class="quote" >' + result.quote + '</p>';
  message += '<p class="source">' + result.source + optional() +'</p>';
  //sets the content of the page to the string message
  document.getElementById('quote-box').innerHTML = message;
  document.body.style.background = "url("+ result.img +")";
  document.getElementById('loadQuote').style.backgroundColor = getRandomColor();
}

// the optional function returns either year or citation or both from the quote object if it exists
function optional(){
  var returnValue = '';
  if (result.citation !== undefined) {
   returnValue = '<span class="citation">' + result.citation + '</span>'
}
  if (result.year !== undefined) {
    returnValue += '<span class="year">' + result.year + '</span>'
  }
  return returnValue
}
// this function returns a string with randomly generated hex-color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
