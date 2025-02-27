function checkCardNumber(cardNumber) {
  cardNumber = cardNumber.replace(/\D/g, '');

  const digits = cardNumber.split('').map(Number);

  for (let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;

      if (digits[i] > 9) {
          digits[i] -= 9;
      }
  }

  const totalSum = digits.reduce((acc, digit) => acc + digit, 0);
  return totalSum % 10 === 0;
}

const cardNumber = "4539-1488-0343-6467";
console.log(checkCardNumber(cardNumber)); 


