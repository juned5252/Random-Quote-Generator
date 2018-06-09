// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var message = ''

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// getRandomQuote returns a random quote object from the quotesArray
function getRandomQuote(){
  var rand = Math.floor(Math.random() * quotes.length);
  var output = quotes[rand];
  return output;
}

// printQuote builds a string from the getRandomQuote function and adds it to the DOM
function printQuote(){
  var result = getRandomQuote();
  message = '<p class="quote" >' + result.quote + '</p>';
  document.getElementById('quote-box').innerHTML = message;
  //console.log(message);
}
/*var index

for(var i = 0; i < quotes.length; i++){
  index = quotes[i];
  for(var key in index){
  console.log(index[key]);
  }
}
*/
