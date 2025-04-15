// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// const strings = ["apple", "banana", "strawberry"];
// const lengths = strings.map((str) => str.length);
// console.log(lengths);

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// function currentSums(arr) {
//   return arr.reduce((acc, num, index) => {
//     acc.push((acc[index - 1] || 0) + num);
//     return acc;
//   }, []);
// }
// console.log(currentSums(numbers));

// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const nums = [0, 1, 2, 3, 4, 5, 6, 7];
// const pairs = [];
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === 7) {
//       pairs.push([nums[i], nums[j]]);
//     }
//   }
// }
// console.log(pairs);

// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const str = "Hello Word";
// const initials = str.split("").map((word) => word[0]);
// console.log(initials);

// 5. Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// const str = "abcde";
// const chars = str
//   .split("")
//   .map((_, i, arr) => `${arr[i - 1] || ""}${arr[i]}${arr[i + 1] || ""}`);
// console.log(chars);

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const digits = [3, 1, 4, 2, 5];
// const sortDesc = digits.sort((a, b) => b - a);
// console.log(sortDesc);

// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// const a = [1, 5, 3];
// const b = [8, 2];
// const c = [4, 6];
// const combined = [...a, ...b, ...c].sort((x, y) => y - x).join("");
// console.log(combined);

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const matrix = [[1, 2, 3], [4, 5], [6]];
// const sum = matrix.flat().reduce((acc, val) => acc + val, 0);
// console.log(sum);

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1, 2, 3, 4, 5];
// const reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);

// 10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [2, 1, 3, 4, 5];
// let sum = 0,
//   count = 0;
// for (let num of arr) {
//   sum += num;
//   count++;
//   if (sum > 10) break;
// }
// console.log(count);

// 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrFill(value, count) {
//   return Array(count).fill(value);
// }
// console.log(arrFill("a", 4));
