function getValue(expanses) {
  const inputId = document.getElementById(expanses + "-amount");
  const inputValue = parseInt(inputId.value);
  if (inputValue > 0) {
    return inputValue;
  } else if (isNaN) {
    alert("Please enter the number value");
  }
}

// Calculate section
document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeAmount = getValue("income");
  const foodAmount = getValue("food");
  const rentAmount = getValue("rent");
  const clothAmount = getValue("cloth");
  const totalExpansesAmount = document.getElementById("expense-amount");
  const blance = document.getElementById("balance-amount");
  const expansesAmount = foodAmount + rentAmount + clothAmount;
  totalExpansesAmount.innerText = expansesAmount;
  const income = incomeAmount - expansesAmount;
  blance.innerText = income;
});
