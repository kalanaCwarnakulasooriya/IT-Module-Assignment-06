let value1;
let value2;
let operator;
let result;

function setDisplayValue(value) {
  document.getElementById("display").value += value;
}

function getDisplayOperator(value) {
  value1 = document.getElementById("display").value;
  operator = value;
  clearDisplay();
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  value2 = document.getElementById("display").value;
  clearDisplay();
  switch (operator) {
    case "+":
      result = parseFloat(value1) + parseFloat(value2);
      break;
    case "-":
      result = parseFloat(value1) - parseFloat(value2);
      break;
    case "*":
      result = parseFloat(value1) * parseFloat(value2);
      break;
    case "/":
      result = parseFloat(value1) / parseFloat(value2);
      break;
  }
  document.getElementById("display").value = result;
  operator = null;
}