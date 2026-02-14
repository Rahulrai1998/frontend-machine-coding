//UNION OF TWO ARRAYS: create new array with combination of unique elements of both arrays.
const a = [1, 2];
const b = [2, 3];

//using Set(): createa set of unique elements.
const union = [...new Set([...a, ...b])];
console.log(union) //prints array: [1 ,2 , 3]
console.log(...union) //PRINTS ARRAY ELEMENTS IN SAME LINE: 1 2 3
for (let a of union) {
  console.log(a + " ");
}
