//return longest word from the given string.
let input = "Return longest word from the givenkjdfkjdfdf string";

//approach: 1
const getLongest = (input) => {
  if (input.length === 0) return null;
  return input.split(" ").sort((a, b) => b.length - a.length)[0];
};
console.log(getLongest(input));

//approach: 2
const getLongest2 = (input) => {
  if (input.length === 0) return null;
  return input.split(" ").reduce((longest, curr) => {
    if (curr.length > longest.length) longest = curr;
    return longest;
  }, "");
};
console.log(getLongest2(input));

//approach: 3
const getLongest3 = (input) => {
  if (input.length === 0) return null;
  let arr = input.split(" ");
  let mx = "";
  for (const elm of arr) {
    if (elm.length > mx.length) mx = elm;
  }
  return mx;
};
console.log(getLongest3(input));
