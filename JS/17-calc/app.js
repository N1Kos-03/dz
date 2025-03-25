
function calc(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Пожалуйста, введите оба числа.";
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Деление на ноль невозможно";
        break;
    }
  }

  document.getElementById('result').textContent = "Результат: " + result;

  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
}