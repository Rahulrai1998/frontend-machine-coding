//without generics, it will take and return any value as any.
//typescript won't identify the data-type of args without generics.
function indetify<T>(arg: T): T {
  return arg;
}

let output1 = indetify("new test"); //type of outpu1 is string
let output2 = indetify(0); //type of output is number

function fn<T>(args: T): T {
  return args;
}
let op1 = fn<string>("test"); // we can pass the type explicitly, here it's string.
let op2 = fn(45); //type inferred as number

//generics in interfaces
interface KeyValue<K, V> {
  key: K;
  value: V;
}
type nameKey = {
  name: string;
  mykey: string;
};
let stringNumber: KeyValue<nameKey, number> = {
  key: {
    name: "test",
    mykey: "",
  },
  value: 26,
};

class Store<T> {
  private data: T[] = [];
  addItem(item: T): void {
    this.data.push(item);
  }
  getItems(): T[] {
    return this.data;
  }
}

const numberStore = new Store<number>();
numberStore.addItem(10); // works fine
console.log(numberStore.getItems()); // returns array of numbers

const stringStore = new Store<string>();
stringStore.addItem("Test");
console.log(stringStore.getItems()); //return array of strings


//constraints
