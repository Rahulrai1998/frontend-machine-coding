//level: BGN
//Find the missing number from given array input, till the given count and return the array of those missing elements.
//let arr = [1,2,3,5]
//let count = 10.
//output: [4, 6, 7, 8, 9, 10]

let arr = [1, 2, 3, 5];
let count = 10;

function getMissing(arr, count) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1 && arr[i + 1] !== arr[i] + 1) ans.push(arr[i] + 1);
  }
  return ans;
}
console.log(getMissing(arr, count));
