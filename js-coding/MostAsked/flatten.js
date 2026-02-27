// Implement a function(not poyfill) flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

//flatten([1, [2, [3, [4, [5]]]]]): [1,2,3,4,5]

//using Array.prototype.flat(depth) built-in method. It returns a new array with all levels flattened. Default depth is 0.
// let arr = [1, [2, [3, [4]]]];
//let flat1 = arr.flat(); //this only flattens the first level of nesting
//let flat2 = arr.flat(Infinity); //it will flatten all levels

// Recursive approach - 1, without depth
//using reduce and concat methods.
function flattenArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Invalid input");
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) return acc.concat(flattenArray(cur));
    else return acc.concat(cur);
  }, []);
}
let testCase = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];
console.log(flattenArray(testCase));

//Recursive approach - 2, without depth
const flattenArray2 = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Input must be an array!!");
  const result = [];
  for (const elm of arr) {
    if (Array.isArray(elm)) result.push(...flattenArray2(elm));
    else result.push(elm);
  }
  return result;
};

console.log(flattenArray2([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))

//Iterative approach, without depth
