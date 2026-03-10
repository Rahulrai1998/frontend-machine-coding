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
//any
var an = 10;
var s1 = an; //no compilation error
// an.method(); //no compliation error, but could crash at runtime if an isn' an object with that method.
//unknown
var un = 10;
// let s2: string = un; //Compile-time error: 'unknown is not assignable to string'
//Must perform a type check(type guard/type narrowing) before using
if (typeof un === "number") {
    un *= 2; //safe operation within the type-guard block.
}
//type-assertion
var val = "this is me";
// let str: number = val.length; //compile-time error due to unknown type. Type assertion is required.
var str2 = val.length; //method 1: will work fine
var str3 = val.length; //method2: will work fine
var person = {
    name: "Rahul",
    age: 21
};
console.log(person);
