const buttons = document.querySelectorAll('button');
const counterDiv = document.getElementById('counter');
let count = 0;
let lastClickedButton = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    counterDiv.textContent = `Количество нажатий: ${count}`;

    if (lastClickedButton && lastClickedButton !== button) {
      lastClickedButton.textContent = 'Нажми меня';
    }

    button.textContent = 'Нажата';

    lastClickedButton = button;
  });
});



