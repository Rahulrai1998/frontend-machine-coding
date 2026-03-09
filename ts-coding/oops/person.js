var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.arrow = function () {
            console.log("this is arrow");
        };
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Person.prototype.normal = function () {
        console.log("this is normal");
    };
    return Person;
}());
var rahul = new Person("Rahul", "Kumar", 28);
var surname = rahul.surname, age = rahul.age, normal = rahul.normal, arrow = rahul.arrow;
console.log(rahul.name + " " + surname);
normal();
arrow();
