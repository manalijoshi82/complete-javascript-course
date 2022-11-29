// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1945));

// convert recipe ingredients from ounces to grams
//1 ounce = 28.34gms

// function ounceToGrams(ounces) {
//   let grams = ounces * 28.34;
//   return `${ounces} ounces is equal to ${grams} grams`;
// }

// // console.log(ounceToGrams(5));

// function flOzToCups(oz) {
//   let cups = oz * 0.125;
//   return `${oz} fluid ounce is equal to ${cups} cups`;
// }

// console.log(flOzToCups(8));

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// function getAmplitude(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     const curTemp = arr[i];

//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   // console.log(min);
//   return max - min;
// }

// // getAmplitude([3, 7, 4, 1, 8]);
// const amplitude = getAmplitude(temperature);
// console.log(amplitude);

// function getAmplitude(arr1, arr2) {
//   const newArr = arr1.concat(arr2);
//   // console.log(newArr);

//   let max = newArr[0];
//   let min = newArr[0];
//   for (let i = 0; i < newArr.length; i++) {
//     const curTemp = newArr[i];

//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   // console.log(min);
//   return max - min;
// }

// const amplitude = getAmplitude([1, 2, 3], [4, 5, 6]);
// console.log(amplitude);

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°c in ${i + 1} days...`;
  }
  console.log('...' + str);
}

printForecast([17, 21, 23]);
