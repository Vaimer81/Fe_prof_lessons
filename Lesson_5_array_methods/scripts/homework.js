// ДЗ (for и forEach)
// 1. Дан массив с числами. Вычислить сумму элементов массива

const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];

let sum = 0;
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i]
}

let sum2 = 0;
numbers.forEach(el => sum2 += el);


// 2. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

const long_strings = [];
strings.forEach(el => el.length > 7 ? long_strings.push(el) : '');

// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d

const d_strings = [];
strings.forEach(el => el[0].toLowerCase() === 'd' ? d_strings.push(el) : '');

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень

const numbers_pow = [];
numbers.forEach(el => numbers_pow.push(el ** 3));

// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7

const numbers_7 = [];
numbers.forEach(el => el % 10 === 7 ? numbers_7.push(el) : '');