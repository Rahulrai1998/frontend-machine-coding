//level: BGN
//Find the missing number from given array input, till the given count and return the array of those missing elements.
//let arr = [1,2,3,5]
//let count = 10.
//output: [4, 6, 7, 8, 9, 10]

let arr = [1, 2, 3, 5];
let count = 10;

function getMissing(arr, count) {
  let ans = [];
  for (let i = 1; i <= count; i++) {
    if (!arr.includes(i)) {
      ans.push(i);
    }
  }
  return ans;
}
console.log(getMissing(arr, count));

//SOLVE WITHOUT include()
function withoutInclude(arr, count) {
  let ans = [];
  for (let i = 1; i <= count; i++) {
    let flag = false;
    for (const elm of arr) {
      if (elm === i) {
        flag = true;
        break;
      }
    }
    if (!flag) ans.push(i);
  }
  return ans;
}
console.log(withoutInclude(arr, count));
