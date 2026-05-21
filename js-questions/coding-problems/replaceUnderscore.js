/*
Replace underscore with spaces and capitalize first character of words.
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

/*
Difference between i<arr.length and let len=arr.length; i<len

let arr = [39,4,7935];
let len = arr.length;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/
