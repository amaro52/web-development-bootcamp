// let generateName = require("sillyname");
import generateName from "sillyname"; // using ECMAScript
import superheroes from "./node_modules/superheroes";

// sillyname
// let sillyName = generateName();
// console.log(`I am ${sillyName}.`); // backwards quotes can be used to concatonate like this

// superhero name
let superheroName = superheroes.random();
console.log(`I am ${superheroName}`);
