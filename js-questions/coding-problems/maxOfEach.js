/*
Return an array of max numbers from each string element from the provided array.
input: ["23-43-65", "98-12-100", "12-23-239"]
output: [65,100,239]
*/

const input = ["23-43-65", "98-12-100", "12-23-239"];
const ans = input.map((elm) => {
  let strArray = elm.split("-");
  //console.log(strArray);
  //let num = strArray.map((elm) => Number(elm)); // Explicit type conversion is ideal.
  return Math.max(...strArray); //1
});
console.log(ans);

/*
1. Implicit Type Coercion: auto type conversion of data when doing an operations with mismatched types data. like "54" + 12 = 5412, 12 => "12"
"12"-3 = 9, "12"=>12.
- addition operation is an exception where string gets converted to Number for string concatination.
*/
