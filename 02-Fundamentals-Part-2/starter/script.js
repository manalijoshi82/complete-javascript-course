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

// function calcTip(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         return billValue * 0.15;
//     } else {
//         return billValue * 0.2
//     }
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],]
// console.log(total);

// console.log(tips[0], total[0], tips[1], total[1], tips[2], total[2]);

// const myCountry = {
//     country: "USA",
//     capital: "Washington DC",
//     language: "English",
//     population: 335773639,
//     neighbours: ["Canada", "Mexico", "Cuba", "Bahamas"],

//     describe: function () {
//         return `${this.country} has ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called, ${this.capital};`
//     },

//     checkIsIland: function () {
//         isIsland: return `${this.neighbours.length === 0 ? true : false}`;
//     }
// };

// console.log(myCountry.describe());
// console.log(myCountry.checkIsIland());

// console.log(`${myCountry.country} has ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called , ${myCountry.capital}.`);

// myCountry.population = 535773639;
// console.log(myCountry.population);

// myCountry.population = 435773639;
// console.log(myCountry);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ["Michael", 'Peter', 'Steven']
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ["Michael", 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// console.log(jonas.getSummary());

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return mark.BMI;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return john.BMI;
//     }
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());


// if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI ${john.BMI}
//     `)
// } else if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI ${john.BMI}) is higher than ${mark.fullName}'s BMI $ {mark.BMI}`)
// }


//Loops
// for (let count = 1; count <= 50; count++) {
//     console.log(`Voter number ${count} is currently voting`);
// }



// const populations = [1412979781, 335773639, 1412979781, 2412979781];

// function percentageOfWorld1(population) {
//     const worldPopulation = 7900000000;
//     const percentage = (population / worldPopulation) * 100
//     return (percentage);
// }

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];

// const percentage2 = [];

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentage2.push(perc);
// }

// console.log(percentage2);

// const jonas = [
//     'Jonas',
//     'Joshi',
//     2037 - 1982,
//     'Coder',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let count = jonas.length - 1; count >= 0; count--) {
//     console.log(jonas[count]);
// }

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`${listOfNeighbours[i][j]}`);
//     }
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    for (let j = 0; j < tips[i].length; j++) {
        totals.push(tips[j] + bills[j]);
    }

}
// console.log(tips);
console.log(totals);