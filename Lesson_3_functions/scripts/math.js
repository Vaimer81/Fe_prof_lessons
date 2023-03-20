const a = Math.max(6, 3, -10, 73); // 73
const b = Math.min(6, 3, -10, 73); // -10

const c = Math.abs(4); // 4
const d = Math.abs(-4); // 4

const e = Math.ceil(4.00001); // 5 - вверх
const f = Math.floor(4.73); // 4 - вниз
const g = Math.round(4.73); // 5 - по правилам математики

const h = Math.pow(6, 2); // 6 ** 2 === 36
const i = Math.sqrt(36); // 6

const j = Math.random(); // случайное дробное число (от 0 до 1)



const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];

// 1. Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]

const numbers_five = [];

for(let i = 0; i < numbers.length; i++) {
  if(Math.abs(numbers[i] % 10) === 5){
    numbers_five.push(numbers[i])
  }
}

// console.log(numbers_five);

// 5 % 10 === 5
// 15 % 10 === 5
// 35 % 10 === 5
// -5 % 10 === -5


// 2. Сформировать новый массив, состоящий из последних цифр чисел (без -) => [1, 5, 7, 8, 9, 4, 5, 5, 5, 0]

const last_digits = [];
for(let i = 0; i < numbers.length; i++){
  last_digits.push(Math.abs(numbers[i] % 10))
}

// 3. Написать функцию, которая принимает 3 числа и возвращает наибольшее из них

const getMaxNum = (num1, num2, num3) => Math.max(num1, num2, num3);

const getMaxNum1 = (num1, num2, num3) => {
  return Math.max(num1, num2, num3)
};

// console.log(getMaxNum(4, 1, 88)); // 88
// console.log(getMaxNum(65, 103, 3)); // 103


// 4. Написать функцию, которая принимает два числа - основание степени и показатель степени и возвращает результат возведения числа в степень

const getPow = (base, exp) => Math.pow(base, exp);

// console.log(getPow(2, 3)); // 8
// console.log(getPow(4, 2)); // 16


// 5. Сгенерировать случайное целое число от 0 до 10. Вывести его в консоль.

const random = Math.round(Math.random() * 10); // 0 - 10
const random_2 = Math.floor(Math.random() * 11);


// 6. Сгенерировать случайное целое число от 0 до 30. Вывести его в консоль.

const random_3 = Math.round(Math.random() * 30); // 0 - 30

// 7. Сгененировать случайное целое число от 10 до 20

const random_4 = Math.round(Math.random() * 10 + 10); // 10 - 20

// 8. Сгененировать случайное целое число от 15 до 30

const random_5 = Math.round(Math.random() * 15 + 15);


// 9. Написать функцию, которая принимает массив со строками. И формирует новый массив со строками, чья длина превышает 5 символов

const greetings = ['hello', 'hi', 'good morning', 'good afternoon', 'hey']; // ['good morning', 'good afternoon']

const getLongWords = arr => {
  const result = [];
  for(let i = 0; i < arr.length; i ++){
    if(arr[i].length > 5){
      result.push(arr[i])
    }
  }
  return result
}

console.log(getLongWords(greetings));