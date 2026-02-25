// patna is my home town, but i live in bangalore.
// capitalize the first character of every word.

let input = "patna is my home town, but i live in bangalore.";
let words = input.split(" ");
let ans = words
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(ans);
