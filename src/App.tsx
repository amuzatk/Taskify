import React, { useState } from "react";
import "./App.css";

import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  // console.log(todo);
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;

// let name: any;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let count: number[];
// let role: [number, string];
//Tuple
// role = [4, "kaz"];

// function reversedStr(value: string) {
//   let reversedVlaue = "";
//   value.split("").forEach((char: string) => {
//     reversedVlaue = char + reversedVlaue;
//   });
//   return reversedVlaue;
// }
// console.log(reversedStr("ALLAH'S HELP"));

// function printName(name: string) {
//   console.log(`${name}`);
// }
// printName("Kazeeemahhhh");
// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Kazeem",
// };

// let lotOfPerson: Person[];

// type X = {
//   a: string;
//   b: number;
// };

// type Y = X & {
//   c: string;
//   d: number;
// };

// let y: Y = {
//   c: "jjjjj",
//   d: 23,
//   a: "hhgfkh",
//   b: 56,
// };
