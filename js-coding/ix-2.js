// let arr = ["Iraq", "India", "Africa", "Japan", "United States", "united kingdom", "Mexico", "Russia"];

// output should be
// {
//   [ 'Iraq' ],
//   [ 'India', 'Japan' ],
//   [ 'Africa', 'Mexico', 'Russia' ],
//   [ 'United States' ],
//   [ 'united kingdom' ]
// }

let result = {}
let len = arr.length;


for(let i=0;i<len;i++){
    let childArr = []
    let currLen = arr[i].length
    for(let j = 0 ; j <len ; j++){
        if(arr[j].length === currLen){
            childArr.push(arr[j])
        }
    }
    result.push(childArr)
}


console.log(result)
