// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/******************** QUOTES ARRAY ********************/

var quotes = [
    { quote: "Knowledge speaks, but wisdom listens.", source: "Jimi Hendrix" },
    { quote: "Sing an F.", source: "David Kuhns" },
    { quote: "There is no pleasure in having nothing to do; the fun is in having lots to do and not doing it.", source: "Mary Wilson Little" },
    { quote: "When the power of love overcomes the love of power the world will know peace.", source: "Jimi Hendrix", citation:"music", year: "1970" },
    { quote: "Be kind, for everyone you meet is fighting a hard battle.", source: "Plato"}
];


/******************** FUNCTIONS ********************/

//Generate a random # between 0 and 1, multiply it by the length of the quote array, then select the quote corresponding to the random number
function getRandomQuote() {
    var selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return selectedQuote;
}

//Change the quote to a new, random one
function printQuote() {
    var theQuote = getRandomQuote();
    var printThis = '<p class="quote">' + theQuote.quote + "</p>";
    printThis += '<p class="source">' + theQuote.source;
    //If there is something in the array as a citation, add it to the string
    if (theQuote.citation !== undefined) {
        //If there is a year as well, add the citation then the year
        if (theQuote.year !== undefined) {
            printThis += '<span class="citation">' + theQuote.citation + "</span>" + '<span class="year">' + theQuote.year + "</span>" + "</p>";
        }
        //Otherwise just the citation
        else {
            printThis += '<span class="citation">' + theQuote.citation + "</p>";
        }
    }
    //If there is something in the array as a year, add it to the string
    else if (theQuote.year !== undefined) {
        printThis += '<span class="year">' + theQuote.year + "</span>" + "</p>";
    }
    //Otherwise, close the HTML paragraph
    else {
        printThis += "</p>";
    }
    //Displays the final string of HTML
    document.getElementById('quote-box').innerHTML = printThis;
    console.log(printThis);
}

