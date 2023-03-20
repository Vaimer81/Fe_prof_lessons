// 1. Напишите цикл, который считает сумму чисел от 20 до 35

let sum = 0;
for(let i = 20; i <= 35; i++){
  sum += i
}


// 2. Напишите цикл, который выводит произведение всех чисел от 10 до 15

let mult = 1;
for(let i = 10; i <= 15; i++){
  mult *= i
}


// 3. Дан массив чисел. Сформировать новый массив, в который войдут только положительные числа

const numbers = [1, 5, -7, -88, 9, 44, 15, 35, -5, 10];

const positive_numbers = [];

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0) {
    positive_numbers.push(numbers[i])
  }
}

// numbers - массив с числами
// i - индекс элемента массива (0-8)
// numbers[i] - элемент массива по индексу


// 4. Сформировать новый массив из четных чисел

const even_numbers = [];

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0){
    even_numbers.push(numbers[i])
  }
}

// for(let i = 0; i < numbers.length; i++){
//   numbers[i] % 2 === 0 ? even_numbers.push(numbers[i]) : ''
// }

// Условие ? true : false

// if(условие){
//   true
// } else {
//   false
// }

// 5. Сформировать новый массив из четных отрицательных чисел => [-88]

const even_negative_numbers = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0 && numbers[i] < 0){
    even_negative_numbers.push(numbers[i])
  }
}


// 6. Сформировать новый массив из чисел, заканчивющихся на 5 => [5, 15, 35, -5]

const numbers_five = [];
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 10 === 5 || numbers[i] % 10 === -5){
    numbers_five.push(numbers[i])
  }
}

// || ИЛИ
// && И

// 73 % 10 === 3
// 58 % 10 === 8
// 35 % 10 === 5


// 7. Сформировать новый массив, состоящий их последних цифр чисел => [1, 5, -7, -8, 9, 4, 5, 5, -5, 0]

const last_numbers = [];
for(let i = 0; i < numbers.length; i++) {
  last_numbers.push(numbers[i] % 10)
}

// 8. Сформировать новый массив, состоящий из последних цифр чисел (без -) => [1, 5, 7, 8, 9, 4, 5, 5, 5, 0]

const last_numbers2 = [];
for(let i = 0; i < numbers.length; i++) {
  last_numbers2.push(numbers[i] < 0 ? numbers[i] * -1 % 10 : numbers[i] % 10)
}