//let arr = [1,2,3,4,5,6,7,8,9,11]
//write a function to return the missing number in the array

let input = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
function getMissing(arr) {
  if (!Array.isArray(arr)) return -1;
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    if (arr[i] !== arr[i - 1] + 1) return arr[i - 1] + 1;
  }
  return -1;
}
console.log(getMissing(input));
