//return an array of sorted ages.
const people = [
  { name: "Prathi", age: 32, place: "Pune" },
  { name: "Prathi", age: 31, place: "Pune" },
  { name: "Prathi", age: 42, place: "Pune" },
  { name: "Prathi", age: 12, place: "Pune" },
];

// ASCENDING ORDER
let results = people.map((elm) => elm.age).sort((a, b) => a - b);
//DESCENDING ORDER
let results2 = people.map((elm) => elm.age).sort((a, b) => b - a);
console.log(results, results2);

// IN-PLACE SORTING the entire object.
people.sort((a, b) => a.age - b.age);
console.log(people);
