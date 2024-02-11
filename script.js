const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const quoteText = document.getElementById("quoteText");
  quoteText.textContent = getRandomQuote();
}

function changeColor(color) {
  const quoteContainer = document.getElementById("quoteContainer");
  quoteContainer.style.backgroundColor = color;
  quoteContainer.style.borderColor = color;
}

function changeFont() {
  const quoteText = document.getElementById("quoteText");
  const fonts = [
    "Arial",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
  ];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  quoteText.style.fontFamily = randomFont;
  quoteText.style.fontSize = getRandomFontSize() + "px";
}

function getRandomFontSize() {
  // Generate a random font size between 12 and 24 pixels
  return Math.floor(Math.random() * (24 - 12 + 1) + 12);
}

document.addEventListener("DOMContentLoaded", function () {
  displayQuote();
});
