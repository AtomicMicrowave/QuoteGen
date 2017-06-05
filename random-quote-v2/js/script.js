// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/******************** QUOTES ARRAY ********************/

var quotes = [
    { quote: "Knowledge speaks, but wisdom listens.", source: "Jimi Hendrix" },
    { quote: "Sing an F", source: "David Kuhns" },
    { quote: "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.", source: "Mary Wilson Little" },
    { quote: "When the power of love overcomes the love of power the world will know peace", source: "Jimi Hendrix" },
    { quote: "Be kind, for everyone you meet is fighting a hard battle.", source: "Plato", year: "427 BC - 347 BC" }
];


/******************** FUNCTIONS ********************/

function print(message) {
    document.write(message);
}

function getRandomQuote() {
    var selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return selectedQuote;
}

function printQuote() {
    var quote = getRandomQuote().quote;
    var source = getRandomQuote().source;
    var year = getRandomQuote().year;
    var citation = getRandomQuote().citation;
    var printThis = '<p class="quote">' + quote + "</p>";
    printThis += '<p class="source">' + source;
    //If there is something in the array as a citation, add it to the string
    if (getRandomQuote().citation !== undefined) {
        printThis += '<span class="citation">' + ", " + citation + "</span>";
    }
    //If there is something in the array as a year, add it to the string
    else if (getRandomQuote().year !== undefined) {
        printThis += '<span class="year">' + ", " + year + "</span>";
    }
    //Otherwise, close the HTML paragraph
    else {
        printThis += "</p>";
    }
    //Displays the final string of HTML
    document.getElementById('quote-box').innerHTML;
}