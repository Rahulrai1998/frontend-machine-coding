//write a function to print 1 five times on an interval of 1 second. Generalize it for frequency and time-interval.
function print(freq, interval) {
  let count = 0;
  let intervalId = setInterval(() => {
    console.log(1);
    count++;
    if (intervalId && count === freq) clearInterval(intervalId);
  }, interval);
}
print(2, 1000);
/*
freq = 2
count = 2
1  1 
*/
