window.onload = function () {
  const textArea = document.getElementById("textArea");
  const clearAllBtn = document.getElementById("clearAll");
  const capitalizeBtn = document.getElementById("capitalize");
  const sortBtn = document.getElementById("sort");
  const reverseBtn = document.getElementById("reverse");
  const stripBlankBtn = document.getElementById("stripBlank");
  const addNumbersBtn = document.getElementById("addNumbers");
  const shuffleBtn = document.getElementById("shuffle");

  clearAllBtn.addEventListener("click", function () {
    textArea.value = "";
  });

  capitalizeBtn.addEventListener("click", function () {
    let text = textArea.value;
    if (text === "") return;

    textArea.value = text
      .split("\n")
      .map((line) => {
        return line.toUpperCase();
      })
      .join("\n");
  });

  sortBtn.addEventListener("click", function () {
    let text = textArea.value;
    if (text === "") return;

    textArea.value = text.split("\n").sort().join("\n");
  });

  reverseBtn.addEventListener("click", function () {
    let text = textArea.value;
    if (text === "") return;

    textArea.value = text
      .split("\n")
      .map((line) => {
        return line.split("").reverse().join("");
      })
      .join("\n");
  });

  stripBlankBtn.addEventListener("click", function () {
    let text = textArea.value;
    if (text === "") return;

    textArea.value = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "")
      .join("\n");
  });

  addNumbersBtn.addEventListener("click", function () {
    let text = textArea.value;
    if (text === "") return;

    let lines = text.split("\n");
    textArea.value = lines
      .map((line, index) => {
        return `${index + 1}. ${line}`;
      })
      .join("\n");
  });

  shuffleBtn.addEventListener("click", function () {
    let text = textArea.value;
    if (text === "") return;

    let lines = text.split("\n");
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    textArea.value = lines.join("\n");
  });
};
