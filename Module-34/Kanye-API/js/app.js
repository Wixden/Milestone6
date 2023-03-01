const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

// async await:
const loadQuotes = async () => {
  const url = "https://api.kanye.rest/";
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayQuote(data);
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = (quotes) => {
  const quoteContainer = document.getElementById("quote");
  quoteContainer.innerText = quotes.quote;
};

// loadQuotes();
loadQuote();
