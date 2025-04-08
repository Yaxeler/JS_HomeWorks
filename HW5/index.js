// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// function stringToarray(str) {
//   return str.split(" ");
// }

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// function deleteСharacters(str, length) {
//   return str.substring(0, length);
// }

// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// function insertDash(str) {
//   return str.toUpperCase().split(" ").join("-");
// }
// console.log(insertDash("строка, будет, такая"));

// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// function upperFirstChar(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(upperFirstChar("колокольчик"));

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// function upperFirstChar(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => upperFirstChar(word))
//     .join(" ");
// }
// console.log(capitalize("привет мир"));

// 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// function changeRegister(str) {
//   return str
//     .split(" ")
//     .map((char) => {
//       return char === char.toUpperCase()
//         ? char.toLowerCase()
//         : char.toUpperCase();
//     })
//     .join(" ");
// }

// 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// function removeChar(str) {
//     const allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//       if (allowed.indexOf(str[i]) !== -1) {
//         result += str[i];
//       }
//     }
//     return result;
//   }

// 8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// function zeros(num, len) {
//     let sign = num >= 0 ? "+" : "-";
//     let str = Math.abs(num).toString().padStart(len, "0");
//     return sign + str;
// }

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// function comparison(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }

// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// function insensitiveSearch(str1, str2) {
//   return str1.toLowerCase().includes(str2.toLowerCase());
// }

// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// function initCap(str) {
//     const words = str.split(' ');
//     let result = '';

//     for (let i = 0; i < words.length; i++) {
//       let word = words[i].toLowerCase();
//       if (word.length > 0) {
//         result += word[0].toUpperCase() + word.slice(1);
//       }
//     }

//     return result;
//   }

// 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// function initSnake(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= "A" && char <= "Z") {
//       if (i !== 0) result += "_";
//       result += char.toLowerCase();
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }

// 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// function repeatStr(str, n) {
//     return str.repeat(n);
// }

// 14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// function path(pathname) {
//   const parts = pathname.split("\\");
//   return parts[parts.length - 1];
// }

// 15. Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// function endsWith(str, str1) {
//     return str.slice(-str.length) === str1;
// }

// 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// function getSubstr(str, char, pos) {
//   const index = str.indexOf(char);
//   if (index === -1) return " ";
//   return pos === "after" ? str.slice(index + 1) : str.slice(0, index);
// }

// 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos) {
//     return str.slice(0, pos) + substr + str.slice(pos)
// }

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb = "...") {
//     return str.length > n ? str.slice(0, n - symb.length) + symb : str;
// }

// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// function count(str, stringsearch) {
//   let counter = 0;
//   for (let i = 0; i <= str.length - stringsearch.length; i++) {
//     if (str.slice(i, i + stringsearch.length) === stringsearch) {
//       counter++;
//     }
//   }
//   return counter;
// }

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// function strip(str) {
//     return str.trim().split(/\s+/).join(" ");
// }

// 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// function cutString(str, n) {
//   return str.split(" ").slice(0, n).join(" ");
// }

// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// function findWord(word, str) {
//   const words = str.split(" ");
//   return words.includes(word);
// }
