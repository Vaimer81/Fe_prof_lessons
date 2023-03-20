// Средний уровень сложности:
// Напишите цикл, который выводит в консоль все простые числа от 2 до 100.

for (let i = 2; i <= 100; i++) {
    let isPrime = true // создаем переменную и присваиваем ей true
  
    // Проверка, является ли число простым:
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    // Если число простое, выводим его в консоль
    if (isPrime) {
      console.log(i)
    }
  }
  
  // 3 % 2 === 1
  
  // 5 % 2 === 1
  // 5 % 3 === 2
  // 5 % 4 === 1
  
  // 6 % 2 === 0
  // 6 % 3
  // 6 % 4
  // 6 % 5
  
  
  
  // Напишите цикл, который находит среднее арифметическое всех чисел в массиве.
  
  const numbers = [1, 2, 3, 4, 5];
  
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  
  let avg = sum / numbers.length;
  
  
  // Напишите цикл, который выводит в консоль таблицу умножения на 5.
  
  // for(let i = 0; i <= 10; i++){
  //   let result = i * 5;
  //   console.log(`${i} * 5 = ${result}`)
  // }
  
  // Напишите цикл, который переворачивает порядок элементов в массиве.
  
  const array = ['hello', 5, 'hi', 65, false];
  
  const array_reverse = [];
  
  for(let i = array.length - 1; i >= 0; i--){
    array_reverse.push(array[i])
  }
  
  // Напишите цикл, который находит сумму элементов массива, кратных 3 или 5.
  
  const nums = [2, 5, 7, 15, 99, 10, 8, 54];
  
  let sum_nums = 0;
  
  for(let i = 0; i < nums.length; i++){
    if(nums[i] % 3 === 0 || nums[i] % 5 === 0){
      sum_nums += nums[i]
    }
  }