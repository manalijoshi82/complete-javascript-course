'use strict';

// function logger() {
//     console.log("My name is Jonas");
// }

// logger();

// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(calcAge(1982));

// function describeCountry(country, population, capitalCity) {
//     return (`${country} has ${population} population and its capital city is ${capitalCity}`);
// }

// const result1 = describeCountry("USA", "4.5million", "Washington DC");
// const result2 = describeCountry("India", "1.3 Billion", "Delhi");

// console.log(result1);
// console.log(result2);

// function percentageOfWorld1(population) {
//     const worldPopulation = 7900000000;
//     const percentage = (population / worldPopulation) * 100
//     return Math.round(percentage);
// }

// const populationIndia = percentageOfWorld1(1412979781);
// const populationUSA = percentageOfWorld1(335773639);
// const populationChina = percentageOfWorld1(1452632862);

// console.log(populationIndia, populationUSA, populationChina);

const percentageOfWorld1 = function (population) {
    const worldPopulation = 7900000000;
    const percentage = (population / worldPopulation) * 100
    return Math.round(percentage);
}
const populationIndia = percentageOfWorld1(1412979781);
const populationUSA = percentageOfWorld1(335773639);
const populationChina = percentageOfWorld1(1452632862);

console.log(populationIndia, populationUSA, populationChina);

