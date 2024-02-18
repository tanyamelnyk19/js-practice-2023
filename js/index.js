// Занятие 1

// function sum() {
//     return 2 + 3;
// }

// let result = sum();

// console.log(result)

// Ошибки в консоли

// const name;

// console.log(age);
// let age;

// console.log('HELLO WORLSd')

// Определение типа значения, оператор typeof
// Валидация форм

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;

// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error);
// console.log(typeof quantity);

// Шаблонные строки
// // Написать фразу с помощью шаблонных строк
// Здравствуйте, меня зовут А, мне Б лет и мне нравится Ц, где А, Б, Ц - переменные вставленные в строку.

// const  name = 'Tanya';
// const age = "27";
// const like = 'cat';

// const message = `Здравствуйте, меня зовут ${name}, мне ${age} лет и мне нравится ${like}`;
// console.log(message);

// const name = 'Манго';
// const age = 5;
// const hobby = 'плавать';
// const message = `Здравствуйте, меня зовут ${name} мне ${age} лет и мне нравиться ${hobby}`;

// console.log(message);

// Prompt и confirm

// Спросить у пользователя имя, почту,  телефон и показать в консоле фразу
// "Пользоваель под именем ____ использует ____ почту и ____ телелефон"
// 1) Спросить имя юзера (prompt)
// 2) Спросить почту (prompt)
// 3) Спросить телефон (prompt)
// 4) Составить финальную фразу (template string)

// const userName = prompt("Введите свое имя");
// console.log(userName);
// const userEmail = prompt("Введите свой Email");
// console.log(userEmail);
// const userTel = prompt("Введите свой телефон");
// console.log(userTel);
// const message = `Пользоваель под именем ${userName} использует ${userEmail} почту и ${userTel} телелефон`;
// console.log(message);

// const userName = prompt('Enter your name');
// const email = prompt('Enter your email');
// const phoneNumber = prompt('Enter phon number');

// const message = `Пользоваель под именем ${userName} использует ${email} почту и ${phoneNumber} телелефон`;
// console.log(message);

// let userName, email, phone;

//  Базовые операторы +,-,*,/

// Проверка сложения

// let a = "Join ";
// let b = "us";
// console.log(a + b);
// console.log(typeof a + b)

// let a = 3;
// let b = ' join';
// console.log(a + b);

// let a = true;
// let b = " join";
// console.log(a + b);

// let a = true;
// let b = 12;
// console.log(a + b);

// let a = true;
// let b = true;
// console.log(a + b);

// let a = true;
// let b = "false";
// console.log(a + b);

// let a = 12;
// let b = null;
// console.log(a + b);

// let a = undefined;
// let b = 10;
// console.log(a + b);

// let a = undefined;
// let b = false;
// console.log(a + b);

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b;
// console.log(result);
// console.log(typeof result);

// Обьект Math
// // Определить площадь круга с радиусом 10см (ПR(2)). Math.pow(a, b) - возведение в степень

// const radius = 10;
// const square = Math.PI * radius ** 2;
// // const square = Math.PI * Math.pow(radius, 2);
// console.log(square);

// const rad = 10;
// const PI = Math.PI;
// const powRad = Math.pow(rad, 2);
// const result = PI * powRad;
// console.log('result', result)

// const rad = 10;
// const area = Math.PI * Math.pow(rad, 2);
// console.log(area);

//Операторы сравнения и приведение типов
// // Каким будет результат этих выражений?

// console.log(5 > 4);
// console.log(10 >= "7");
// console.log("2" > "12");
// console.log("2" < "12");
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Ёнанас" < "ёжик");
// console.log("Ёнанас" === "ёжик");
// console.log(undefined == null);
// console.log(undefined === null);

// Посчитать суму товаров в козине магазина
// Нужно ввести цену 3-х товаров и посчитать их суму

// const phonePrice = Number(prompt('Enter phone price')); // 10
// const tvPrice = +prompt('Enter tv price'); // 12
// const playStationPrice = Number(prompt('Enter ps price')) // 8

// const result = phonePrice + tvPrice + playStationPrice;

// console.log(result); // 30

// Занятие 2

// 1) создать переменную емпроис - количество работников
// 2) создать переменную зарплаты
// 3) сделать цикл, на каждой итерации генерировать случ зарплату от 500 до 5000
// 4) посчитать сумму зп

// const employees = 5;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i+=1) {
//     console.log('i:', i);
//     // const salary = Number((Math.random() * (maxSalary - minSalary) + minSalary).toFixed());
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log('salary:', salary);
//     totalSalary += salary;
//     console.log('totalSalary:', totalSalary);
// }

// const min = 6;
// const max = 13;
// let total = 0;

// // 1)найти все четные числа в промежутке от мин до макс
// // 2)сложить все найденые четные числа

// for (let n = min; n <= max; n+=1) {
//     if (n % 2 === 0) {
//         console.log('n:', n);
//         total += n;
//         console.log(`это total после сложения ${n}:`,total);
//     }
// }

// console.log('total:', total);

// Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
//  * от потраченной суммы за всё время (партнёрская программа).
//  *
//  * - Общая сумма потраченного хранится в переменной totalSpent
//  * - Сумма текущего платежа хранится в переменной payment
//  * - Скидка хранится в переменной discount
//  *
//  * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
//  * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
//  * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
//  * - Если потрачено меньше 100) - не партнёр, скидка 0%
//  *
//  * - В результате вывести сообщение
//  * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
//  */

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
//     console.log('бронзовый партнёр, скидка 2%');
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 0.05;
//     console.log('серебрянный партрёр, скидка 5%');
// } else if (totalSpent >= 5000) {
//     discount = 0.1;
//     console.log('золотой партрёр, скидка 10%');
// } else {
//     console.log('не партнёр, скидка 0%');
// }

// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;
// const min = Number(prompt());

// for (let i = min; i <= 100; i +=1) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
//     continue;
// }

// infinite loop
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel,
// и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

// let total = 0;
// let number;

// do {
//     number = prompt('enter a number');
//     console.log(`ты ввел число ${number}`);
//     total += Number(number);
// } while (number !== null);

// console.log('ура ты вышел с цикла');
// alert(`Общая сумма чисел равна ${total}`);

// const max = 142;
// const min = 42;

// for (let i = max; i >= min; i -=2) {
//     console.log(i);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let total = 0;

// for (const num of cart) {
//     console.log('num', num)
//     total += num;
//     console.log('total', total);
// }

// console.log('это окончательный тотал', total);

// сумма всех четных чисел
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// let total = 0;

// for (const num of numbers) {
//     num % 2 === 0 ? total += num : total;
//     // if (num % 2 === 0) {
//     //     console.log('num чётное!', num)
//     //     total += num;
//     //     console.log('total', total)
//     // }
// }
// console.log('total после цикла', total);

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'm4ngoDoge';
// let message = `Пользователь ${loginToFind} не найден.`;

// 1)
// for (let i = 0 ; i < logins.length; i += 1) {
//     if (logins[i] === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log('message:', message)

// 2)
// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log('message:', message)

// 3)
// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден.`
// : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     smallestNumber = number < smallestNumber
//     ? number
//     : smallestNumber;
// }
// console.log('smallestNumber', smallestNumber)

// * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
//  * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
//  */

// const string = 'JavaScript';
// console.log(string);
// const arr = string.split('');
// console.log('arr', arr);
// let invertedString = '';

// for(let i = 0; i < arr.length; i+=1) {
//     arr[i] === arr[i].toUpperCase()
//     ? arr[i] = arr[i].toLowerCase()
//     : arr[i] = arr[i].toUpperCase();
//     // if (arr[i] === arr[i].toUpperCase()) {
//     //     arr[i] = arr[i].toLowerCase();
//     // } else {
//     //     arr[i] = arr[i].toUpperCase();
//     // }
//     invertedString += arr[i];
// }

// for (const letter of string) {
//     invertedString +=
//     letter === letter.toUpperCase()
//     ? letter.toLowerCase()
//     : letter.toUpperCase();
// }

// console.log(invertedString);

// 2) Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива
//будет выводить в консоль сообщение в формате < номер элемента > - <значение элемента >.
//Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено
// 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const names = ['Mango', 'Poly', 'Ajax'];

// function logItems(array) {
//     for (let i=0; i < array.length; i+=1){
//         console.log(`element numder ${i+1} - ${array[i]}`);
//     }
// }

// logItems(names);

// 5) Проверить если корзину пуста - показать фразу "Пустая корзина" иначе показать фразу "В корзине {х} товаров"
// где х - это количество товаров в корзине

// const basket = [];
// const basket = ["Хлеб", "Молоко", "Конфеты", "Chips"];
// let message = '';

// console.log('basket', basket);
//  if (basket.length === 0) {
//     message = 'Пустая корзина';
//  } else {
//     message = `В корзине ${basket.length} товаров`;
//  }

//  console.log('message:', message);

// Функции

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// const calculateTotalPrice = function (items) {
//     let total = 0;
//     for (const item of items) {
//         total += item;
//       }
//     return total;
// }

// console.log(calculateTotalPrice(cart));
// console.log(calculateTotalPrice([1,2,3]));

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// 1)
// const findLogin = function(allLogins, login) {
//     let message = `Пользователь ${login} не найден.`;

//     for (const userLogin of allLogins) {
//         if (userLogin === login) {
//             message = `Пользователь ${login} найден.`
//         }
//     }

//     return message;
// }

// 2)
// const findLogin = function(allLogins, login) {
//     return allLogins.includes(login) ? `Пользователь ${login} найден.` : `Пользователь ${login} не найден.`;
// }

// console.log(findLogin(logins, 'aj4xth3m4n'));

// var min = function(list){
//     let smallestNumber = list[0];
//     for (const num of list) {
//       smallestNumber = num < smallestNumber ? num : smallestNumber;
//     }
//   return smallestNumber;
// }

// var max = function(list){
//     let biggestNumber = list[0];
//     for (const num of list) {
//         biggestNumber = num > biggestNumber ? num : biggestNumber;
//     }
//   return biggestNumber;
// }

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([4,6,2,1,9,63,-134,566]));

// function DNAtoRNA(dna) {
//     const letters = dna.split('');
//     let DNAtoRNAString = '';
//     for(const letter of letters) {
//         if (letter === 'T') {
//             DNAtoRNAString += 'U';
//         } else {
//             DNAtoRNAString += letter;
//         }
//     }
//     return DNAtoRNAString;
// }

// console.log(DNAtoRNA('TTTT'));
// console.log(DNAtoRNA("GCAT"));
// console.log(DNAtoRNA("GACCGCCGCC"));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function(array, ...numbers) {
//     let newArr =[];
//     for (const number of numbers) {
//         if (array.includes(number)) {
//             newArr.push(number)
//         }
//     }
//     return newArr;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// -----------------------------------------

// function squareOrSquareRoot(array) {
//     const newArr = [];
//     for (const num of array) {
//       const sqrtNum = Math.sqrt(num);
//       Number.isInteger(sqrtNum) ? newArr.push(sqrtNum) : newArr.push(num ** 2);
//     }
//     return newArr;
// }

// console.log(squareOrSquareRoot([4,3,9,7,2,1])); // [2,9,3,49,4,1]

//1) Напиши функцию calculateAverage() которая принимает произвольное кол-во аргументов и возвращает их
// среднее значение.Все аругменты будут только числами.

// const calculateAverage = function(...args) {
//     let total = 0;
//     for(const num of args) {
//         total += num;
//     }
//     return (total / args.length).toFixed(2);
// }
// console.log(calculateAverage(1.2, 2.7, 3.3, 4.9));
// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// 2) Напишите функцию greet(name),
// которая при вызове будет получать имя(например, «Василий»)
// и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»

// const greet = function(name) {
//     return name ? `Привет, ${name}` : 'Привет, гость';
// }

// const greet = function(name = 'гость') {
//     return `Привет, ${name}`;
// }

// console.log(greet("Манго"));
// console.log(greet());

// 3) Выполните рефакторинг заменив объявление функции на стрелочную функцию.

// const checkNumbers = (a, b)  =>
// a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;

// console.log(checkNumbers(1, 2));
// console.log(checkNumbers(6, 5));

// 5) Написать ф - ю capitalize которая буде принимать строку
// и будет возвращать новую где каждое слово будет с большой буквы
// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// const capitalize = function(string) {
//     const capitalizedArray = [];
//     const worlds = string.split(' ');
//     for (const world of worlds) {
//         const capitalizedWorld = world[0].toUpperCase() + world.slice(1);
//         capitalizedArray.push(capitalizedWorld);
//     }
//     return capitalizedArray.join(' ')
// }

// console.log(capitalize("the quick brown fox"));

// 6) Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// console.log(courses);

// const addCourse = (name) =>
//     courses.includes(name)
//     ? console.log('У вас уже есть такой курс')
//     : courses.push(name);

// const removeCourse = (name) => {
//     const indexToRemove = courses.indexOf(name);

//     indexToRemove === -1
//     ? console.log('Курс с таким имененем не найден')
//     : courses.splice(indexToRemove,1);
// }

// const updateCourse = (oldName, newName) => {
//     const indexToUpdate = courses.indexOf(oldName);
//     // courses.splice(indexToUpdate, 1, newName);
//     // courses[indexToUpdate] = newName;
//     removeCourse(oldName);
//     addCourse(newName);
// }

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже есть такое курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс с таким имененем не найден'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// console.log(courses);

// const arr = ["sheep", "sheep", "wolf"];

// function warnTheSheep(queue) {
//     const reversedQueue = queue.reverse();
//     return reversedQueue.indexOf('wolf') === 0
//   ? 'Pls go away and stop eating my sheep'
//   : `Oi! Sheep number ${reversedQueue.indexOf('wolf')}! You are about to be eaten by a wolf!`;
// }

// console.log(warnTheSheep(arr));

// function firstNonConsecutive (arr) {
//     for (let i = 1; i < arr.length; i += 1 ) {
//       if (arr[i] - arr[i-1] !== 1) {
//         return arr[i];
//       }
//     }
//     return null;
// }

//  console.log(firstNonConsecutive([1,2,3,4]));

// ---------------------------
// 1)  Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// console.log('user', user);
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const userKeys = Object.keys(user);
// console.log('userKeys', userKeys);

// for (const key of userKeys) {
//   console.log(`${key} : ${user[key]}`);
// }

// 2) У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function calculateTotalSalaries(object) {
//   let sum = 0;
//   const salariesValues = Object.values(object);
//   for (const salary of salariesValues) {
//     sum += salary;
//   }
//   return sum;
// }

// console.log(calculateTotalSalaries(salaries));

// 4) Создайте объект calculator(калькулятор) с тремя методами:
// read()- запрашивает два значения и сохраняет их как свойства объекта.
// sum() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: null,
//   b: null,

//   read (a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     return Number(this.a) + Number(this.b);
//   },

//   mult() {
//     return this.a * this.b;
//   }
// }

// console.log('calculator', calculator);
// calculator.read(1, 2);
// console.log(calculator.sum());
// console.log(calculator.mult());

// 3) Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(`result`, calcTotalPrice(stones, "Бриллиант")); // 8100

// 5) Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// // /*
// //  * Каждая транзакция это объект со свойствами: id, type и amount
// //  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       type,
//       amount
//     }
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//       const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//       this.transactions.push(newTransaction);
//       this.balance += amount;
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('Снятие такой суммы не возможно, недостаточно средств.');
//       return;
//     }
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(newTransaction);
//     this.balance -= amount;
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     // return account.transactions[id];
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return "Transaction Not Exist";
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if(transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// console.log(`account before`, account);
// // console.log("result", account.createTransaction(100, Transaction.DEPOSIT));
// console.log('deposit:', account.deposit(100));
// console.log('deposit:', account.deposit(200));

// console.log(`account after`, account);
// console.log('withdraw:', account.withdraw(150));
// console.log(`account after`, account);
// console.log('withdraw:', account.withdraw(1500));
// console.log('account.geBalance()', account.getBalance());
// console.log('account.transactions', account.transactions);
// console.log(account.getTransactionDetails(2));
// console.log('total', account.getTransactionTotal(Transaction.WITHDRAW));

// *
//  * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
//  */

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     const { items } = this;

//     for (const item of items) {
//       if(item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     }

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         const indexToRemove = items.indexOf(item);
//         items.splice(indexToRemove, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for(const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },

//   increaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if(item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if(item.name === productName) {
//         item.quantity === 1
//         ? this.remove(item.name)
//         : item.quantity -= 1;
//         return;
//       }
//     }
//   },
// }

// // console.log(cart.getItems());
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// // cart.remove('🍇');
// // cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍇');
// cart.increaseQuantity('🍇');
// // console.table(cart.getItems());
// // console.log(cart.countTotalPrice());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// ------------Callback функции и замыкания

// Напишите две функции:

// letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name

// const letMeSeeYourName = function(callback) {
//   const userName = prompt('Enter your name');
//   callback(userName);
// }

// const greet = function(name) {
//   console.log(`Hello ${name}!`);
// }

// letMeSeeYourName(greet);

// // Напишите две функции:

// makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек.
// Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль

// const makeProduct = function(name, price, callback) {
//   const newProduct = {
//     name,
//     price,
//     id: Date.now(),
//   };
//   callback(newProduct);
// };

// const showProduct = function(product) {
//   console.log(product);
// };

// makeProduct('iphone', 1000, showProduct);

// Напишите функцию для хранения скидки.
// Функция возвращает другую функцию, которая принимает
// сумму покупки и возвращает финальную сумму с сохранённой скидкой.

// function applyDiscount (discount) {
//   // discount
//   return function countFinalCost(value) {
//     return value - value * discount;
//   }
// }

// const withBaseDiscount = applyDiscount(0); // {discount = 0}
// const withSilverDiscount = applyDiscount(0.05);
// const withGoldDiscount = applyDiscount(0.1);

// console.log(withBaseDiscount); //

// console.log(withBaseDiscount(100)); // 100
// console.log(withBaseDiscount(200)); // 200
// console.log(withSilverDiscount(100)); // 95
// console.log(withSilverDiscount(200)); //190
// console.log(withGoldDiscount(100)); // 90
// console.log(withGoldDiscount(200)); // 180

// 2)  Напишите функцию savePassword(password) которая принимает пароль и возвращает внутреннюю функцию,
// которая принимает строку и возвращает буль true, если строка совпадает с сохраненным паролем и false - если не совпадает.

// function savePassword(password) {
//   return function makePasswordChecker(userPassword) {
//     return password === userPassword;
//   }
// }

// const checker = savePassword("Hello");
// console.log(checker);

// console.log(`checker`, checker("Aaaaaa")); // false
// console.log(`checker`, checker("Bbbbbbb")); // false
// console.log(`checker`, checker("Hello")); // true

// 1) Напишите функцию makeCounter(), которая возвращает другую функцию, которая считает и логирует количество своих вызовов.

// function makeCounter() {
//   let count = 0;
//   return function logCounter() {
//     count +=1 ;
//     console.log(`Функция logCounter была вызвана ${count} раз(a)`);
//   }
// }

// const counter = makeCounter();

// counter(); // 1
// counter(); // 2
// counter(); // 3

// PROTOTYPE, __proto__

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// console.log('User.prototype', User.prototype);

// const mango = new User ({
//     email: 'mango@mail.com',
//     password: 1111111
// });

// console.log('mango', mango);

// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };

// mango.changeEmail('myNewMail@mail.com');
// console.log('mango', mango);

// ========= COUNTER============

// const CounterPlugin = function ({
//     rootSelector,
//     initialValue = 0,
//     step = 1
// } = {}) {
//     this.rootSelector = rootSelector;
//     this._value = initialValue;
//     this._step = step;
// };

// CounterPlugin.prototype.increment = function () {
//     this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//     this._value -= this._step;
// };

// const counter1 = new CounterPlugin ({ rootSelector: '#counter-1', step: 10 });
// console.log('counter1', counter1);

// const counter2 = new CounterPlugin ({ rootSelector: '#counter-2', step: 2 });
// console.log('counter2', counter2);

// 1) Написать ф - ю конструктор которая создает обект person с такими ключами
// const person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить строку Привет {имя} мне {возраст} лет. Мне нравится {интерес}
//   },
//   greeting() {
//     // Привет, я {имя}
//   },
// // };

// function Person (obj) {
//     const { firstName, lastName, age, gender, interest } = obj;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;
// }

// Person.prototype.greeting = function () {
//     console.log(`Hello, I'm ${this.firstName}`);
// };

// Person.prototype.bio = function () {
//     console.log(`Hello ${this.firstName}! I'm ${this.age} years old. I like ${this.interest}`);
// };

// const Tanya = {
//     firstName: "Tetiana",
//     lastName: "Melnyk",
//     age: 27,
//     gender: "female",
//     interest: "programming",
// }

// console.log('Tanya', Tanya)

// const userTanya = new Person(Tanya);
// console.log('userTanya', userTanya);
// userTanya.bio();
// userTanya.greeting();
// // console.log(Person.prototype === userTanya.__proto__); //true

// function Teacher (obj) {
//     const { subject } = obj;
//     Person.call(this, obj);
//     this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// const teacher1 = new Teacher({
//   firstName: "Bob",
//   lastName: "Dou",
//   age: 45,
//   gender: "male",
//   interest: "football",
//   subject: "Math",
// });

// console.log('teacher1', teacher1);
// teacher1.bio();

// 4) Создать конструктор Student который наследует свойства Person и изменяет метод greeting

// function Student (obj) {
//     Person.call(this, obj)
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.greeting = function () {
//     console.log(`Hello, student ${this.firstName} ${this.lastName}!`);
// };

// const student1 = new Student(Tanya);
// console.log('student1', student1);
// student1.greeting();

// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
//   return {
//     completed,
//     category,
//     priority,
//     ...data
//   }
//     // Change code above this line
//   }

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате
// 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.'
// Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// };

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   const orderPosition = i + 1;

//   messages.push(composeMessage.call(orders[i], orderPosition));
// }

// // for (const order of orders) {
// //   const orderPosition = orders.indexOf(order) + 1;
// //   message = composeMessage.call(order, orderPosition);
// //   messages.push(message);
// // }

// console.log('messages', messages)

// function StringBuilder (baseValue) {
//     this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function() {
//     return this.value;
// };

// StringBuilder.prototype.padEnd = function(str) {
//     this.value += str;
// };

// StringBuilder.prototype.padStart = function(str) {
//     this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function(str) {
//     this.value = str + this.value + str;
// };

//наследование классов

// class Hero {
//     constructor(name, xp) {
//         this.name = name;
//         this.xp = xp;
//     }
// }

// class Warrior extends Hero {
//     constructor(name, xp, weapon) {
//         super(name, xp);

//         this.weapon = weapon;
//     }
// }

// const mango = new Warrior ('Mango', 1000, 'sword');
// console.log(mango);

// class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {

//     static AccessLevel = {
//       BASIC: 'basic',
//       SUPERUSER: 'superuser'
//     };

//     accessLevel;
//     blacklistedEmails;

//     constructor({ email, accessLevel }) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     }

//     blacklist(email) {
//       this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//        return this.blacklistedEmails.includes(email);
//     }

//   }

//   const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
//   });

//   console.log(mango.email); // mango@mail.com
//   console.log(mango.accessLevel); // superuser
//   mango.blacklist('poly@mail.com');
//   console.log(mango.blacklistedEmails); // 'poly@mail.com'
//   console.log(mango.isBlacklisted('mango@mail.com')); //  false
//   console.log(mango.isBlacklisted('poly@mail.com')); // true
//   console.log('mango', mango)

// 1) Напиши класс User для создания пользователя со следующим свойствами:
// username - имя, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// Класс ожидает 1 параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку:
// User ${ имя } is ${ возраст } years old and has ${ кол - во постов } posts.

// class User {
//   constructor({ username, age, numberOfPosts }) {
//     this.username = username;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//   }

//   getInfo() {
//     return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//     greeting = () => {
//     return `Hello ${this.username}`;
//   }
// }

// const mango = new User({
//   username: "Mango",
//   age: 24,
//   numberOfPosts: 20,
// });

// class SuperUser extends User {
//   constructor({ username, age, numberOfPosts }) {
//     super({ username, age, numberOfPosts });
//   }
// }

// const bob = new SuperUser({
//   username: "Bob",
//   age: 43,
//   numberOfPosts: 12,
// });

// console.log(`mango`, mango);
// console.log(mango.getInfo());
// console.log(`bob`, bob);
// console.log(bob.getInfo());
// console.log(bob.greeting());

// 3) Напиши класс Storage который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     if (!this.items.includes(item)) {
//       return;
//     }
//     const ind = this.items.indexOf(item);
//     this.items.splice(ind,1);
//   }
// }

// const storage = new Storage(["Яблоки", "Бананы", "Кокосы", "Киви"]);
// console.log('storage', storage);
// console.table(storage.getItems());
// storage.addItem("Манго");
// console.table(storage.getItems());
// storage.removeItem("Киви");
// console.table(storage.getItems());
// storage.removeItem("Бабоаб");

// 4) Напиши класс Client который создаёт объект со свойствами login и email.
// Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class Client {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new Client({
//   login: 'mango',
//   email: 'mango@mail.com'
// });

// console.log(mango);
// console.log(mango.login);
// console.log(mango.email);
// mango.login = 'Mangoooo';
// console.log(mango.login);

// 5)  Напиши клас Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь конструктору статическое свойство Priority, в котором будет храниться объект с приоритетами.
// {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   }

// class Notes {
//   static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//   };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(newNote) {
//     this.items.push(newNote);
//   }

//   removeNote(noteText) {
//     this.items.forEach((item, index) => {
//       if (item.text === noteText) {
//         this.items.splice(index, 1);
//       }
//       else {
//         return "This note doesn't exist!";
//       }
//     })
//   }
// }

// const myNotes = new Notes([]);
// console.log('myNotes', myNotes);

// myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
// console.log(myNotes.items);

// myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.removeNote('ybxtuj');
// console.log(myNotes.items);

// // myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// // console.log(myNotes.items);

// const salaries = {
//     mango: 100,
//     poly: 50,
//     jax: 150,
// };

// const totalSalary = Object.values(salaries).reduce(
//     (acc, salary) => acc + salary,
//     0,
// );
// console.log('totalSalary', totalSalary);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// /*
//  * Собираем все теги из твитов
//  */

// const allTegs = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
// console.log('allTegs', allTegs);

// /*
//  * Ведём статистику тегов
//  */

// const tagsStats = allTegs.reduce((stats, tag) => {
//   // if (stats.hasOwnProperty(tag)) {
//   //   stats[tag] += 1;
//   // } else {
//   //   stats[tag] = 1;
//   // }
//   // return stats;

//   return {
//     ...stats,
//     [tag]: stats[tag] ? stats[tag] + 1 : 1,
//   }
// }, {});

// console.log('tagsStats', tagsStats);

// const scientists = [
//     {
//         name: 'Albert',
//         surname: 'Einstein',
//         born: 1879,
//         dead: 1955,
//         id: 1,
//     },
//     {
//         name: 'Isaac',
//         surname: 'Newton',
//         born: 1643,
//         dead: 1727,
//         id: 2,
//     },
//     {
//         name: 'Galileo',
//         surname: 'Galilei',
//         born: 1564,
//         dead: 1642,
//         id: 3,
//     },
//     {
//         name: 'Marie',
//         surname: 'Curie',
//         born: 1867,
//         dead: 1934,
//         id: 4,
//     },
//     {
//         name: 'Johannes',
//         surname: 'Kepler',
//         born: 1571,
//         dead: 1630,
//         id: 5,
//     },
//     {
//         name: 'Nicolaus',
//         surname: 'Copernicus',
//         born: 1473,
//         dead: 1543,
//         id: 6,
//     },
//     {
//         name: 'Max',
//         surname: 'Planck',
//         born: 1858,
//         dead: 1947,
//         id: 7,
//     },
//     {
//         name: 'Katherine',
//         surname: 'Blodgett',
//         born: 1898,
//         dead: 1979,
//         id: 8,
//     },
//     {
//         name: 'Ada',
//         surname: 'Lovelace',
//         born: 1815,
//         dead: 1852,
//         id: 9,
//     },

//     {
//         name: 'Lise',
//         surname: 'Meitner',
//         born: 1878,
//         dead: 1968,
//         id: 11,
//     },
//     {
//         name: 'Sarah E.',
//         surname: 'Goode',
//         born: 1855,
//         dead: 1905,
//         id: 10,
//     },
//     {
//         name: 'Hanna',
//         surname: 'Hammarström',
//         born: 1829,
//         dead: 1909,
//         id: 12,
//     },
// ];

// console.log('scientists', scientists);

// //  получить массив ученых которые родились в 19 ст

// const scientistsOf19thCentury = scientists
//     .filter(({ born }) => born >= 1800 && born < 1900)
//     .map(({ name, surname }) => `${name} ${surname}`);

// // console.log('scientistsOf19thCentury', scientistsOf19thCentury);

// //  Посчитать суму лет сколько прожили все ученные

// const totalLifespan = scientists.reduce(
//     (total, { born, dead }) => total + dead - born,
//     0,
// );
// // console.log(totalLifespan);

// //  Отсортировать по алфавиту

// const sortedScientists = [...scientists].sort(
//     (firstScientist, secondScientist) =>
//         firstScientist.surname.localeCompare(secondScientist.surname),
// );
// // console.table( sortedScientists);

// //  Отсортировать по количеству прожитых лет

// const sortedByYears = [...scientists].sort(
//     (firstScientist, secondScientist) => {
//         // const firstLife = firstScientist.dead - firstScientist.born;
//         // const secondLife =secondScientist.dead - secondScientist.born;
//         // return firstLife - secondLife;
//         return (
//             firstScientist.dead -
//             firstScientist.born -
//             (secondScientist.dead - secondScientist.born)
//         );
//     },
// );
// // console.table(sortedByYears);

// //   Удалить ученых которые родились в 15,16,17 ст

// const deleteScientists = scientists.filter(scientist => {
//     // return !(scientist.born >= 1400 && scientist.born < 1700);
//     return scientist.born < 1400 || scientist.born >= 1700;
// });

// console.table(deleteScientists);

// //   Найти год рождения Albert Einstein

// const yearOfBirth = scientists.find(
//     scientist => `${scientist.name} ${scientist.surname}` === 'Albert Einstein',
// ).born;

// // console.log('yearOfBirth', yearOfBirth);

// //   Узнать все ли ученые работали в 19 ст
// const result = scientists.every(
//     scientist =>
//         (scientist.born >= 1800 && scientist.born < 1900) ||
//         (scientist.dead >= 1800 && scientist.dead < 1900),
// );
// console.log(result);

//  Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.

// const prices = [2, 14, 1, 37, 26, 8];

// const pricesDescending  = [...prices].sort((a, b) => b - a);
// console.log('pricesDescending', pricesDescending);

// const pricesAscending  = [...prices].sort((a, b) => a - b);
// console.log('pricesAscending', pricesAscending);

// Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.

// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// const alphabetAscending = [...items].sort((a, b) => a.localeCompare(b));
// console.log('alphabetAscending', alphabetAscending);

// const alphabetDescending = [...items].sort((a, b) => b.localeCompare(a));
// console.log('alphabetDescending', alphabetDescending);

// Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию,
// оставив в uniqueTopics только уникальные элементы.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//     .flatMap(course => course.topics)
//     .filter((topic, index, array) => array.indexOf(topic) === index);

// console.log('allTopics', allTopics);

// function changeEven(numbers, value) {
//     return numbers.map(number => number % 2 === 0 ? number += value : number)
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10))

[
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];

const getTotalBalanceByGender = (users, gender) => {
   return users.filter(user => user.gender === gender)
   .reduce((totalBalance, user) => totalBalance += user.balance
   , 0)
};

// const getNamesSortedByFriendCount = users => {
//     return  [...users].sort((a,b) => a.friends.length - b.friends.length)
//                       .map(user => user.name);
//  };

// Пиши код ниже этой строки
// const getFriends = users => {
//     return users
//         .flatMap(user => user.friends)
//         .filter((friend, ind, arr) => arr.indexOf(friend) === ind);
// };
// Пиши код выше этой строки
// return users.filter(user => user.friends)
// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b);

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         rating: 8.38,
//     },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     {
//         title: 'Сон смешного человека',
//         author: 'Федор Достоевский',
//         rating: 7.75,
//     },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//     { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .sort((a,b) => a.localeCompare(b));

// console.table(names);


