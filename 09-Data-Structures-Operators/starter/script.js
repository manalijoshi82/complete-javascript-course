'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  // destrucring right here instead of calling obj
};
//Rest patterns and rest parameteres

// 1) Destructuring
//SPREAD because on RiGHT side of  =
const arr = [1, 2, ...[3, 4]];

//REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
const addThis = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    // console.log(sum);
  }
  return sum;
};

console.log(addThis(2, 3));
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
addThis(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

//spread operator

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// // console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const Allmenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(Allmenu);

//iterables are arrays,strings, maps, sets but NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 's.'];
// console.log(letters);

// const ingredients = [
//   // prompt(`Let\'s make pasta Ingredient 1?`),
//   // prompt('ingredient2?'),
//   // prompt('ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
// const anotherNewRestaurant = {
//   foundedIn: 1988,
//   ...restaurant,
//   founder: 'Guiseppe',
// };
// console.log(anotherNewRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'abc 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//Object destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//variable names to be different than property names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//set default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables while destructructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

//Nested object destructuring
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//receive 2 return values from a function
/* const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

//Nested destructuring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
