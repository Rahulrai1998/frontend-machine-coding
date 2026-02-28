// Implement a function(not poyfill) flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

//flatten([1, [2, [3, [4, [5]]]]]): [1,2,3,4,5]

//using Array.prototype.flat(depth) built-in method. It returns a new array with all levels flattened. Default depth is 0.
// let arr = [1, [2, [3, [4]]]];
//let flat1 = arr.flat(); //this only flattens the first level of nesting
//let flat2 = arr.flat(Infinity); //it will flatten all levels

// Recursive approach - 1, without depth
//using reduce and concat methods.
//reduce() method is relatively slower than for-loop
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
//this approach is much faster than reduce()
const flattenArray2 = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Input must be an array!!");
  const result = [];
  for (const elm of arr) {
    if (Array.isArray(elm)) result.push(...flattenArray2(elm));
    else result.push(elm);
  }
  return result;
};

console.log(flattenArray2([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));

//Iterative approach, without depth
const flattenArray3 = (arr) => {
  if (!Array.isArray(arr)) throw new Errro("Input must be an array");
  let stack = [...arr];
  let result = [];
  while (stack.length) {
    let elm = stack.pop();
    if (Array.isArray(elm)) stack.push(...elm);
    else result.push(elm);
    // else result.unshift(elm); //unshift():O(N) ,  push():O(1)
  }
  result.reverse(); //reverse(): O(N)
  return result;
};
console.log(flattenArray3([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));

//follow up, flatten the array with given depth.
//recursive approach, with depth.

const flattenArray4 = (arr, depth) => {
  if (!Array.isArray(arr)) throw new Error("Input must be array");
  if (depth === 0) return arr;

  let result = [];
  for (let elm of arr) {
    if (Array.isArray(elm) && depth > 0)
      result.push(...flattenArray4(elm, depth - 1));
    else result.push(elm);
  }
  return result;
};
console.log(flattenArray4([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]], 1));
console.log(flattenArray4([1, [2], [[3]]] , 2));
