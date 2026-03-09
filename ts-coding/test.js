var num = 100;
console.log(num);
var arr = [1, 2, 3];
arr.forEach(function (elm) { return console.log(elm + " "); });
var reverseString = function (input) {
    var ans = "";
    var arr = input.split("").reverse();
    ans = arr.join("");
    return ans;
};
var checkPalidrome = function (input) {
    var temp = input;
    temp = temp.split("").reverse().join("");
    return input === temp;
};
console.log(reverseString("create a new nodemon server"));
console.log(checkPalidrome("aaalaaa"));
