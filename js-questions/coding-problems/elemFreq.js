/*
1. return an object in which key is the array element and values are the corresponding frequency of that element in the array.

arr = [5,5,5,2,2,2,9,4]
output: {
    "5":3,
    "2":3,
    "9":1,
    "4":1
}
*/
function getFreq(input) {
  if (!Array.isArray(input)) return "Not an array";
  if (input.length === 0) return "Empty list";
  let freq = {};

  for (const elm of input) {
    if (freq[elm]) freq[elm]++;
    else freq[elm] = 1;
  }
  return freq;
}
let arr = [5, 5, 5, 2, 2, 2, 9, 4];
console.log(getFreq(arr));

/*
2. Count number of boys in the given array of objects.
let people = [
    {name:"Harry", gender:'girl'},
    {name:"Harry", gender:'boy'},
    {name:"Harry", gender:'girl'},
    {name:"Harry", gender:'boy'},
]
    output: 3
*/

let people = [
  { name: "Harry", gender: "girl" },
  { name: "Harry", gender: "boy" },
  { name: "Harry", gender: "girl" },
  { name: "Harry", gender: "boy" },
  { name: "Harry", gender: "boy" },
];

let count = people.reduce((acc, cur) => (acc += cur.gender === "boy"), 0);
let countFilter = people.filter((elm) => elm.gender === "boy").length;
console.log(count, countFilter);
