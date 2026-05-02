// remove duplicates from a given array.
let input = [1, 3, 6, 3, 9, 9, 9, 9];

//apporach-1 (my solution)
let ans = []; //extra memory, not inplace
input.forEach((elm) => {
  if (!ans.includes(elm)) ans.push(elm);
});
console.log(ans);

//approach-2: using Set
let set = new Set(input); //it will create a set with unique elements out of passed array.
console.log(set);
let ans2 = [...set]; // we can use spread-operator with sets as well.
console.log(ans2);

//approach-3 : inplace, without any inbuilt functions.
let newInput = [...input];
newInput.sort();
// console.log(newInput);

let len = newInput.length;
let left = 0;
let right = 1;

while (right < len) {
  if (newInput[left] === newInput[right]) right++;
  else {
    newInput[left + 1] = newInput[right];
    left++;
  }
}
console.log(newInput);
