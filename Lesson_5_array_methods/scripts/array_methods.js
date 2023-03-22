// .forEach() - выполняет указанную функцию один раз для каждого элемента массива, ничего не возвращает

// .map() - выполняет указанную функцию один раз для каждого элемента массива, возвращает новый массив

// .filter() - возвращает новый массив, в который попадают те элементы, которые прошли указанную проверку


// 1. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень

const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];

// Императивный подход - КАК сделать?
const numbers_pow0 = [];
for (let i = 0; i < numbers.length; i++){
  numbers_pow0.push(numbers[i] ** 3)
}

const numbers_pow1 = [];
numbers.forEach(el => numbers_pow1.push(el ** 3));


// Декларативный подход - ЧТО сделать?
const numbers_pow2 = numbers.map(el => el ** 3);


// 2. Сформировать новый массив, в который попадут все последние цифры => [4, 6, 1, 7, 9, 5, 7, 3, 7]

// .forEach()

const lastDigits = [];
numbers.forEach(el => lastDigits.push(el % 10));

// .map()

const lastDigits1 = numbers.map(el => el % 10);


// 3. Сформировать новый массив, в который попадут все элементы из исходного массива. Если длина элемента меньше 6 (<), то добавить к этой строке 1 => ['hello1', 'apple1', 'orange', 'good morning', 'danke1', 'duck1', 'dinosaure']

const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

// .forEach()

const strings_1 = [];
// strings.forEach(el => el.length < 6 ? strings_1.push(el + 1) : strings_1.push(el))
strings.forEach(el => strings_1.push(el.length < 6 ? el + 1 : el));


// .map()
const strings_2 = strings.map(el => el.length < 6 ? el + 1 : el);


// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива. Если число четное, то поделить его на 2, а если нечетное - умножить на 2

const changed_nums = [];
numbers.forEach(el => changed_nums.push(el % 2 === 0 ? el / 2 : el * 2));

numbers.forEach(el => {
  if(el % 2 === 0){
    changed_nums.push(el / 2)
  } else {
    changed_nums.push(el * 2)
  }
});

const changed_nums1 = numbers.map(el => el % 2 === 0 ? el / 2 : el * 2);

// Условие ? true : false


// 5. Дан массив с разными типами данных. Сформировать новый массив - если элемент является числом, то заменить его на строку 'number' => ['number', 'hello', true, 'hi', 'number', 'number', false]

const arr = [3, 'hello', true, 'hi', 7, 10, false];

const changed_arr = arr.map(el => typeof el === 'number' ? 'number' : el);

const changed_arr1 = arr.map(el => {
  if(typeof el === 'number'){
    return 'number'
  } else {
    return el
  }
});


// 6. Дан массив с числами. Сформировать новый массив - если число меньше 0, то вернуть в массив 'negative'. А если больше 0 - 'positive' => ['positive', 'negative', 'positive', 'negative', 'negative', 'positive']

const nums = [3, -9, 100, -7, -4, 33];

const num2 = nums.map(el => el > 0 ? 'positive' : 'negative');


// 7. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d

const strings1 = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

const d_strings = [];
strings1.forEach(el => el[0].toLowerCase() === 'd' ? d_strings.push(el) : '');

const filtered_strings = strings1.filter(el => el[0].toLowerCase() === 'd');

// 8. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

const long_strings = strings1.filter(el => el.length > 7);


// 9. Дан массив строк. Используйте метод map для преобразования каждой строки в новую строку, которая будет содержать ту же строку в верхнем регистре

const up_strings = strings1.map(el => el.toUpperCase());

// 10. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, в котором каждое число возведено в квадрат.

const powNums = arr => arr.map(el => el ** 2);

// console.log(powNums([1, 2, 3, 4]));
// console.log(powNums([5, 6, 7, 8]));



// ДЗ (map или filter)
// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.
// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.
// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.
// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.
// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.
// 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.
// *7. Макет: https://www.figma.com/file/RbKedig5BcfNRyZ64Tdfow/Lamp?t=WJWTgZs8pWAWRVRE-0