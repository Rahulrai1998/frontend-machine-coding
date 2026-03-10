//instanceof type guard
class Cow {
  shout() {
    console.log("Cow shouts");
  }
}
class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Cow | Cat) {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.shout();
  }
}
makeSound(new Cat());
