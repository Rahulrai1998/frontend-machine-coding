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
