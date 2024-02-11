function convert() {
  const weightInput = parseFloat(document.getElementById("weight").value);
  const conversionType = document.getElementById("conversionType").value;
  let result;

  if (conversionType === "kgToLb") {
    // Convert from kilograms to pounds
    result = weightInput * 2.2046;
    document.getElementById("result").textContent = result.toFixed(2) + " lbs";
  } else if (conversionType === "lbToKg") {
    // Convert from pounds to kilograms
    result = weightInput * 0.4536;
    document.getElementById("result").textContent = result.toFixed(2) + " kg";
  } else {
    document.getElementById("result").textContent = "Invalid conversion type";
  }
}

const conversionTypeSelect = document.getElementById("conversionType");

conversionTypeSelect.addEventListener("mouseover", function () {
  this.size = 2;
});

conversionTypeSelect.addEventListener("mouseout", function () {
  this.size = 1;
});

conversionTypeSelect.addEventListener("change", function () {
  this.size = 1;
});
