function filterValidDates(date) {

  let separator = date.match(/[-./]/)?.[0];
  if (!separator) return false;

  let [a, b, c] = date.split(separator).map(n => parseInt(n));
  if ([a, b, c].some(isNaN)) return false;

  let [day, month, year] = (separator === "/") ? [b, a, c] : [a, b, c];

  if (month < 1 || month > 12 || day < 1 || year < 1) return false;

  let daysInMonth = [31, leapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
}

const leapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

const dateArray = [
  '29-02-2024', // true - 2024 високосный год
  '29-02-2023', // false - 2023 не високосный год
  '02/29/2024', // true - EN формат записи 29-02-2024
  '02/29/2023', // false - EN формат записи 29-02-2023
  '31-09-2024', // false - 31 сентября не бывает
  '30-09-2024', // true - Тут проблем нет - корректная дата
  '30d-09m-2024y', // true / false - корректная дата при условии parseInt для валидации числа, при Number - нет
  '30.01.2024', // true / false - зависит от парсинга разделителей
]

console.log(dateArray.map(date => ({ date, isValid: filterValidDates(date) })));

