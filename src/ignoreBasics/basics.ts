
import './App.css';

// let name: any; this is not recommended
let name: string;
let age: number | string;
let isStudent: boolean;

// void returns undefines while never returns nothing
let printName: (name: string) => never;

// array of strings
let hobbies: string[];

// tuple
let role: [number, string];

// question mark in age make it optional
// type Person = {
//   name: string;
//   age?: number;
// }

interface Person {
  name: string;
  age?: number;
}

// this works like classes in javascript
interface Guy extends Person {
  profession: string;
}

// let person: Person = {
//   name: "Clint",
// }
// // array of the object type Person
// let lotsOfPeople: Person[]



let personName: unknown;



