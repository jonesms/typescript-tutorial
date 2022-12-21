import React from 'react';
import './App.css';

let name: string;
let age: number;
let age2: number | string; // a Union age can be either a string or number
let isStudent: boolean;
let hobbies:string[];
let role:[number,string]; // tuple

name = "Mark";
role=[5,"bill"];

age2= "tweny one";
age2 = 21;

//define an object
type Person = {
  name:string;
  age?:number; //? means optional
};

let person: Person = {
  name:"mark",
 // age: 62
};

let printName2: (name:string) => void; //function dec which returns void

let printName3: (name:string) => never; //function dec which returns nothing

let name2:unknown; // name2 can contain any type. string number object etc

function printName (name:string) {
  console.log(name);
}

printName("Stephen");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
    </div>
  );
}

export default App;
