/*
Write a function to find count occurrences of character in a string.
input: "Javascript", "a"
output: 2
*/
function getCount(input, chr) {
  //   return input.split(chr).length - 1;

  //   return [...input].filter((elm) => elm === chr).length;

  //   let count = 0;
  //   for (const ch of input) {
  //     if (ch === chr) count++;
  //   }
  //   return count;

  let count = [...input].reduce((acc, cur) => {
    if (cur === chr) acc++;
    return acc;
  }, 0);

  return count;
}
console.log(getCount("Javascript", "a"));
