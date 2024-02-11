const numberForm = document.getElementById("numberForm");
const maxResult = document.getElementById("maxResult");
const minResult = document.getElementById("minResult");
const sumResult = document.getElementById("sumResult");
const averageResult = document.getElementById("averageResult");
const reverseResult = document.getElementById("reverseResult");

numberForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const numberSeries = document.getElementById("numberSeries").value;
  const numbers = numberSeries.split(",").map(Number);

  // Calculate max, min, sum, and average
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  // Display max, min, sum, and average
  maxResult.textContent = max;
  minResult.textContent = min;
  sumResult.textContent = sum;
  averageResult.textContent = average.toFixed(2);

  // Calculate reverse order
  const reverseSeries = numbers.slice().reverse().join(", ");
  reverseResult.textContent = reverseSeries;
});
