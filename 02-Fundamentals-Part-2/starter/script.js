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

// const percentageOfWorld1 = function (population) {
//     const worldPopulation = 7900000000;
//     const percentage = (population / worldPopulation) * 100;
//     return Math.round(percentage);
// }
// const populationIndia = percentageOfWorld1(1412979781);
// const populationUSA = percentageOfWorld1(335773639);
// const populationChina = percentageOfWorld1(1452632862);

// return (populationIndia, populationUSA, populationChina);

// function percentageOfWorld2(population) {
//     const worldPopulation = 7900000000;
//     const percentage = (population / worldPopulation) * 100;
//     return Math.round(percentage);
// }

// const populationIndia = percentageOfWorld2(1412979781);
// const populationChina = percentageOfWorld2(335773639);
// const populationUSA = percentageOfWorld2(1452632862);

// console.log(populationIndia, populationChina, populationUSA);

// const percentageOfWorld2 = population => (population / 7900) * 100;

// console.log(percentageOfWorld2(1412979781));
// console.log(percentageOfWorld2(335773639));
// console.log(percentageOfWorld2(1452632862));

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population}, which is about ${percentage}% of the world`;
//     console.log(description);
// }

// describePopulation('china', 1452632862);
// describePopulation('USA', 335773639);
// describePopulation('India', 1412979781);


// const DolphinScore1 = 44;
// const DolphinScore2 = 23;
// const DolphinScore3 = 71;

// const koalaScore1 = 65;
// const koalaScore2 = 54;
// const koalaScore3 = 49;


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No team wins`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);