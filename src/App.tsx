import React from "react";
import logo from "./logo.svg";
import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let count: number[];
let role: [number, string]; //Tuple
role = [4, "kaz"];

function printName(name: string) {
  console.log(name);
}
printName("Kazeeem");
// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Kazeem",
// };

// let lotOfPerson: Person[];

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
