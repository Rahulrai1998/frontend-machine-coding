//create a private counter, which initialized with 0 and then we can add any number
//after that.

//modular design pattern
function counter() {
  let count = 0; //private variable

  function add(val) {
    count += val;
    console.log(count);
    return count;
  }

  function retrive() {
    return count;
  }

  return { add, retrive };
}
const privateCounter = counter();
privateCounter.add(10); //10
privateCounter.add(20); //30
