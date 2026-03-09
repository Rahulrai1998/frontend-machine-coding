class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  normal() {
    console.log("this is normal");
  }

  arrow = () => {
    console.log("this is arrow");
  };
}

const rahul = new Person("Rahul", "Kumar", 28);
const { surname, age, normal, arrow }: Person = rahul;
console.log(rahul.name + " " + surname);
normal();
arrow();
