// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамилия работника.

// class Worker {
//     constructor(name, surname, rate, days) {
//       this.name = name;
//       this.surname = surname;
//       this.rate = rate;
//       this.days = days;
//     }

//     getSalary() {
//       return this.rate * this.days;
//     }

//     getFullName() {
//       return ${this.name} ${this.surname};
//     }
//   }

// 2. Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.

// class Worker {
//     constructor(name, surname, rate, days) {
//       this.name = name;
//       this.surname = surname;
//       this.rate = rate;
//       this.days = days;
//     }

//     getSalary() {
//       return this.rate * this.days;
//     }

//     getFullName() {
//       return ${this.name} ${this.surname};
//     }
//   }

//   class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//       super(name, surname, rate, days);
//       this.workers = workers;
//     }

//     getSalary() {
//       return this.rate * this.days * this.workers;
//     }
//   }

// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

// class Worker {
//     constructor(name, surname, rate, days) {
//       this.name = name;
//       this.surname = surname;
//       this._rate = rate;
//       this._days = days;
//     }

//     // Геттеры и сеттеры для rate
//     get rate() {
//       return this._rate;
//     }

//     set rate(value) {
//       if (value > 0) {
//         this._rate = value;
//       } else {
//         throw new Error("Ставка должна быть больше 0");
//       }
//     }

//     // Геттеры и сеттеры для days
//     get days() {
//       return this._days;
//     }

//     set days(value) {
//       if (value >= 0 && value <= 31) {
//         this._days = value;
//       } else {
//         throw new Error("Количество дней должно быть от 0 до 31");
//       }
//     }

//     getSalary() {
//       return this._rate * this._days;
//     }

//     getFullName() {
//       return ${this.name} ${this.surname};
//     }
//   }

// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.

// class MyString {
//     reverse(str) {
//       return str.split('').reverse().join('');
//     }

//     ucFirst(str) {
//       return str.charAt(0).toUpperCase() + str.slice(1);
//     }

//     ucWords(str) {
//       return str.split(' ').map(word =>
//         word.charAt(0).toUpperCase() + word.slice(1)
//       ).join(' ');
//     }
//   }

// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

// class Validator {
//     isEmail(email) {
//       const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return re.test(email);
//     }

//     isDomain(domain) {
//       const re = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
//       return re.test(domain);
//     }

//     isDate(date) {
//       return !isNaN(Date.parse(date));
//     }

//     isPhone(phone) {
//       const re = /^\+?(\d{1,3})?[- .]?\(?\d{3}\)?[- .]?\d{3}[- .]?\d{4}$/;
//       return re.test(phone);
//     }
//   }

// 6. Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date.

// class User {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }

//     getFullName() {
//       return ${this.name} ${this.surname};
//     }
//   }

//   class Student extends User {
//     constructor(name, surname, year) {
//       super(name, surname);
//       this.year = year;
//     }

//     getCourse() {
//       const currentYear = new Date().getFullYear();
//       const course = currentYear - this.year + 1;
//       return course >= 1 && course <= 5 ? course : 5;
//     }
//   }
