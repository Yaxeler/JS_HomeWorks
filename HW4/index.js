// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function pow(num) {
//   return num * num;
// }
// console.log(pow(3));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 5));

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function math(a, b, c) {
//   return (a - b) / c;
// }
// console.log(math(4, 2, 2));

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function getDayOfWeek(num) {
//   const days = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ];
//   if (num >= 1 && num <= 7) {
//     return days[num - 1];
//   } else {
//     return "Некорректный номер дня";
//   }
// }
// console.log(getDayOfWeek(8));

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// function isEqual(a, b) {
//   return a === b;
// }
// console.log(isEqual(2, 3));

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
// function sum(a, b) {
//   return a + b > 10;
// }
// console.log(sum(7, 5));

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// function isNegative(num) {
//   return num < 0;
// }
// console.log(isNegative(-1));

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange(num) {
//   return num > 0 && num < 10;
// }
// console.log(isNumberInRange(5));

// 9. *Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = (num - (num % 10)) / 10;
//   }
//   return sum;
// }
// console.log(getDigitsSum(124));

// 10. *Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// function getDigitsSum(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = (num - (num % 10)) / 10;
//   }
//   return sum;
// }

// function findYearsWithSum13() {
//   let years = [];
//   for (let year = 1; year <= 2020; year++) {
//     if (getDigitsSum(year) === 13) {
//       years.push(year);
//     }
//   }
//   return years;
// }
// console.log(findYearsWithSum13());

// 11. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(5));

// 12. *Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Можно использовать функцию getDigitsSum из 9 задачи
// function getDigitsSum(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = (num - (num % 10)) / 10;
//   }
//   return sum;
// }
// function retToSingleDigit(num) {
//   while (num > 9) {
//     num = getDigitsSum(num);
//   }
//   return num;
// }
// console.log(retToSingleDigit(138));
// 13. * Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае
// const isPolindrome = (str) => {
//   let i = 0,
//     j = str.length - 1;
//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// };
