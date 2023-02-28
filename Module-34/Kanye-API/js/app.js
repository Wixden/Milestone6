const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quotes) => {
  const quoteContainer = document.getElementById("quote");
  quoteContainer.innerText = quotes.quote;
};

loadQuote();
