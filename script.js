const userText = document.getElementById("userText");
const operation = document.getElementById("operation");
const runButton = document.getElementById("runButton");
const result = document.getElementById("result");

function runStringOperation() {
  const text = userText.value;
  let answer;

  switch (operation.value) {
    case "length":
      answer = text.length;
      break;

    case "upper":
      answer = text.toUpperCase();
      break;

    case "lower":
      answer = text.toLowerCase();
      break;

    case "reverse":
      answer = Array.from(text).reverse().join("");
      break;

    case "first":
      answer = text.length > 0 ? text.charAt(0) : "String is empty";
      break;

    case "trim":
      answer = text.trim();
      break;

    case "words":
      answer = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
      break;

    default:
      answer = "Please choose an operation.";
  }

  result.textContent = String(answer);
}

runButton.addEventListener("click", runStringOperation);

// Display the initial result.
runStringOperation();
