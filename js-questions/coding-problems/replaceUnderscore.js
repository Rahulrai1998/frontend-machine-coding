/*
1. Replace underscore with spaces and capitalize first character of words.
ui_dev_guide => Ui Dev Guide
*/

function modify(str) {
  return str
    .split("_")
    .map((elm) => elm.charAt(0).toUpperCase() + elm.slice(1))
    .join(" ");
}

let str1 = "ui_dev_guide";
let str2 = "contact_details";

console.log(modify(str1));
console.log(modify(str2));

/*
Difference between i<arr.length and let len=arr.length; i<len

let arr = [39,4,7935];
let len = arr.length;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/

/*
2. Replace space with underscore and make every character to lower-case
Ui Dev Guide -> ui_dev_guide
*/

const str3 = "Ui Dev Guide";
const str4 = "Contact Details Kjdfkjdff";

//approach-1
const replaceSpace = (input) => input.toLowerCase().split(" ").join("_");
//approach-2
const replace2 = (input) => input.toLowerCase().replaceAll(" ", "_");
console.log(replaceSpace(str3));
console.log(replaceSpace(str4));
console.log(replace2(str4));
