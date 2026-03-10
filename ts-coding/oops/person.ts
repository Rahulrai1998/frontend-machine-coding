class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  normal() {
    console.log("this is normal");
  }

  arrow = () => {
    console.log("this is arrow");
  };
}

const rahul = new Person("Rahul", "Kumar", 28);
const { surname, age, normal, arrow }: Person = rahul;
console.log(rahul.name + " " + surname);
normal();
arrow();

//interfaces

//Defining object shapes
interface User {
  username: string;
  email: string;
  age?: number; //optional property
}
//this object must adhere the type User
const newUser: User = {
  username: "Rabcho",
  email: "abc",
  age: 12, //this is optional, hence can be omitted
};

//Implementing by classes
interface Animal {
  name: string;
  sound: () => void;
  noise(): void;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound() {
    console.log("Barks");
  }
  noise() {
    console.log("no noise");
  }
}

//function signature
interface MathOperation {
  (x: number, y: number): number;
}
const add: MathOperation = (a, b) => a + b;

//interface extends interface
interface Employee {
  name: string;
  id: number;
}
interface Manager extends Employee {
  department: string;
}

//Declaration Merging
interface BaseStreetFighter {
  name: string;
  age: number;
  birthPlace: string;
}
interface BaseStreetFighter {
  height: number;
  weight: number;
}

//both the declaration properties are merged
const streetFighter: BaseStreetFighter = {
  name: "Rahul",
  age: 26,
  birthPlace: "Patna",
  height: 5.6,
  weight: 56,
};

//Type keyword
//primitive types: gi
type CarYear = number;
type CarType = string;
const bmwYear: CarYear = 2001;
const bmwType: CarType = "Sedan";

//Object types
type Car = {
  year: CarYear;
  type: CarType;
  model: string;
};
const myCar: Car = {
  year: 2023,
  type: "Suv",
  model: "Latest",
};

//union types
type StringOrNumber = string | number;
type Color = "blue" | "red" | "yellow";
const bikeColor: Color = "red"; //it could be either blue, red or yellow

let value: string | number;
value = "Hello"; //valid
value = 45; //valid

//tuples
type CodeType = [number, string];
let statusCode: CodeType;
statusCode = [200, "OK"];

//here we are assigning vallues with wrong data-types at wrong positions.
//wrong order
let newStatusCode: CodeType = ["Ok", 200]; //this will cause error

//another example
type RGB = [number, number, number];
const primaryColor: RGB = [250, 0, 0];

let coords: [number, number] = [10, 20];
coords.push(36); //by default, allowed

let newCoords: readonly [number, number] = [66, 88];
newCoords.push(88); //error
newCoords[0] = 45; // error

//function types
type CallBack = (err: Error | null, res: Color) => StringOrNumber;
const fun: CallBack = (err, res) => {
  return "test";
};
fun(null, "blue");

//extension in types: all properties must be mentioned in the object
type school = {
  name: string;
  address: string;
};
type college = {
  year: number;
};
type BioType = school & college;
const bio: BioType = {
  name: "abc",
  address: "bdx",
  year: 2023,
};
