let a = 10;
a = 100;
// console.log(a);

const b = 12;
//b = 120; //так делать нельзя
// console.log(b);


// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);

// Задана переменная number. Если значение в number больше или равно 10, то вывести в консоль 'hello', а если меньше - 'hi'

let number = 15;
number = 1;

// if(number >= 10){
//   console.log('hello')
// } else {
//   console.log('hi')
// }


// ТЕРНАРНЫЙ ОПЕРАТОР
// Условие ? true : false

// number >= 10 ? console.log('hello') : console.log('hi');


// ЦИКЛЫ

// 1. Вывести в консоль все числа от 0 до 20

// for(let i = 0; i <= 20; i++){
//   console.log(i)
// }

// i = i + 1
// i += 1
// i++

// i = i - 1
// i -= 1
// i--


// 2. Вывести в консоль каждое третье число от 15 до 96

// for(let i = 15; i <= 96; i += 3){
//   console.log(i)
// }


// 3. Вывести в консоль каждое третье число от 96 до 15

// for (let i = 96; i >= 15; i -= 3){
//   console.log(i)
// }


// 4. Вывести в консоль каждое число от 100 до 57

// for(let i = 100; i >= 57; i--){
//   console.log(i)
// }


const numbers = [6, 7, 1, -10, 78, 18, -5, -38, 9];

// 1. Сформировать новый массив, в который попадут все положительные числа из массива numbers

const positive_numbers = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    positive_numbers.push(numbers[i])
  }
}

// for(let i = 0; i < numbers.length; i++){
//   numbers[i] > 0 ? positive_numbers.push(numbers[i]) : '';
// }


// 2. Сформировать новый массив, в который попадут все числа из массива numbers умноженные на 2

const mult_numbers = [];

for(let i = 0; i < numbers.length; i++){
  mult_numbers.push(numbers[i] * 2)
}


// 3. Сформировать новый массив, в который попадут все положительные числа из массива numbers деленные на 2

const div_pos_numbers = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    div_pos_numbers.push(numbers[i] / 2)
  }
}
