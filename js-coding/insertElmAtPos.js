let postion = 3;
let num = 101;
let arr = [1, 2, 34, 5, 6, 77, 8, 8, 5, 54, 4]

//Insert num at position in arr inplace without any built-in methods.
//do the same in new array.

let len = arr.length
let prev;
arr.forEach((cur, i, arr)=>{
   
    if(i === 3){
        prev = arr[i]
      arr[i] = num;  
    } 
    
    if(i>4){
        arr[i] = prev;
        prev = cur
    }
})

console.log(arr)