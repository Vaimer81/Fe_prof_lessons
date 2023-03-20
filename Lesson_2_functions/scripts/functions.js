// ФУНКЦИИ

// Function declaration - объявление функции через слово function

// Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10

// console.log(multNum(5)); // 50


function multNum(num){
    return num * 10
  }
  
  // console.log(multNum(34)); // 340
  // console.log(multNum()); // NaN - not a number (не число)
  
  // не число +-*/ число === NaN
  
  
  
  // Arrow function (стрелочная функция)
  
  // Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10
  
  
  const multNum_arrow = num => num * 10;
  
  // console.log(multNum_arrow(23)); // 230
  // console.log(multNum_arrow(78)); // 780
  
  
  
  // 1. Написать функцию, которая принимает в качестве аргумента 2 числа, а возвращает их сумму
  
  function getSum(num1, num2){
    return num1 + num2
  }
  
  const getSum_arrow = (num1, num2) => num1 + num2;
  
  // console.log(getSum_arrow(4, 6)); // 10
  // console.log(getSum_arrow(43, 7)); // 50