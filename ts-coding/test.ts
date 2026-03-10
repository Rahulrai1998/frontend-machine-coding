const num: number = 100;
console.log(num);

const arr: Array<number> = [1, 2, 3];
arr.forEach((elm: number) => console.log(elm + " "));

const reverseString = (input: string): string => {
  let ans: string = "";
  let arr: Array<string> = input.split("").reverse();
  ans = arr.join("");
  return ans;
};

const checkPalidrome = (input: string): boolean => {
  let temp: string = input;
  temp = temp.split("").reverse().join("");
  return input === temp;
};

console.log(reverseString("create a new nodemon server"));
console.log(checkPalidrome("aaalaaa"));

//any
let an: any = 10;
let s1: string = an; //no compilation error
// an.method(); //no compliation error, but could crash at runtime if an isn' an object with that method.

//unknown
let un: unknown = 10;
// let s2: string = un; //Compile-time error: 'unknown is not assignable to string'

//Must perform a type check(type guard/type narrowing) before using
if (typeof un === "number") {
  un *= 2; //safe operation within the type-guard block.
}

//type-assertion
let val: unknown = "this is me";
// let str: number = val.length; //compile-time error due to unknown type. Type assertion is required.
let str2: number = (val as string).length; //method 1: will work fine
let str3: number = (<string>val).length; //method2: will work fine

interface obj {
  name: string;
  age: number;
}

const person: obj = {
  name: "Rahul",
  age: 21,
};

console.log(person);
