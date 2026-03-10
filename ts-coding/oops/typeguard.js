//instanceof type guard
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.shout = function () {
        console.log("Cow shouts");
    };
    return Cow;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow");
    };
    return Cat;
}());
function makeSound(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.shout();
    }
}
makeSound(new Cat());
