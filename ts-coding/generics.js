//without generics, it will take and return any value as any.
//typescript won't identify the data-type of args without generics.
function indetify(arg) {
    return arg;
}
var output1 = indetify("new test"); //type of outpu1 is string
var output2 = indetify(0); //type of output is number
function fn(args) {
    return args;
}
var op1 = fn("test"); // we can pass the type explicitly, here it's string.
var op2 = fn(45); //type inferred as number
var stringNumber = {
    key: {
        name: "test",
        mykey: ""
    },
    value: 26
};
var Store = /** @class */ (function () {
    function Store() {
        this.data = [];
    }
    Store.prototype.addItem = function (item) {
        this.data.push(item);
    };
    Store.prototype.getItems = function () {
        return this.data;
    };
    return Store;
}());
var numberStore = new Store();
numberStore.addItem(10); // works fine
console.log(numberStore.getItems()); // returns array of numbers
var stringStore = new Store();
stringStore.addItem("Test");
console.log(stringStore.getItems()); //return array of strings
