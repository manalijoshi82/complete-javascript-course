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

function percentageOfWorld1(population) {
    const worldPopulation = 7900000000;
    const percentage = (population / worldPopulation) * 100
    return Math.round(percentage);
}

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


// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);


// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//     } else {
//         console.log(`No team wins`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const populations = [1412979781, 335773639, 1412979781, 2412979781];

// if (populations.length === 4) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];

// const neighbours = ["Nepal", "Pakistan", "Aphganistan", "China", "Bhutan"];

// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (neighbours.includes !== "Germany") {
//     console.log(`Probably not a central European country :D`);
// }

// if (neighbours.includes("China")) {
//     neighbours[neighbours.indexOf("China")] = "Republic of China";
//     console.log(neighbours);
// }

function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],]
console.log(total);

console.log(tips[0], total[0], tips[1], total[1], tips[2], total[2]);