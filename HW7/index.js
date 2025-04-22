// 1. Что выведет функция?
// function f() {
// alert(this);
// }
// let user = {
// g: f.bind(null),
// };
// user.g();
// функция выведет null, т.к. bind(null) привяжет this к null

// 2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
// alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();
// Не можем, после первого bind у функции жестко установлен this, повторное bind не будет иметь силы

// 3. В свойство функции записано значение. Изменится ли оно
// после применения bind?
// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });
// alert( bound.test );
// Результатом вывода будет undefined, так как bind вернет новую функцию у которой нет свойства test

// 4. Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа. Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
// let password = prompt("Password?", ');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'Вася',
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(user.loginOk, user.loginFail);
//ошибка появляется из-за потери конктекста this когда askPassword вызывает ok() и fail() они вызываются, как обычные функции, а не методы объекта user,
// в этом случае this становится undefined или глобальным объектом, для сохранения this надо использовать bind
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5. Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
// let password = prompt("Password?", ');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'John',
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };
// askPassword(?, ?);
// используем bind не только для привязки this, но и для передачи нового аргумента
// askPassword(user.login.bind(user, true), user.login.bind(user, false));

// 6. Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
// const elem = { value: "Привет" };

// function func(surname, name) {
//   console.log(this.value + ", " + surname + " " + name); //alert вместо console.log для браузера
// }

// const boundFunc = func.bind(elem);

// boundFunc("Иванов", "Иван"); // Привет, Иванов Иван
// boundFunc("Петров", "Петр"); // Привет, Петров Петр

// // 7. Есть функция которая складывает три числа.Выполните
// // каррирование.
// const sum = (a, b, c) => a + b + c
// const currySum = a => b => c => a + b + c;

// console.log(currySum(1)(2)(3))

// 8. Реализовать таймер-функцию используя замыкания. Функция
// принимает два  аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера.
// function createTimer(start, end) {
//   return function tick() {
//     console.log(start);
//     if (start === end) {
//       console.log("Таймер завершил работу");
//     } else {
//       start--;
//       setTimeout(tick, 1000);
//     }
//   };
// }

// let timer = createTimer(7, 0);
// timer();
