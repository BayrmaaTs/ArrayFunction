/* 1. Write a JavaScript function to get the first element of an array. Passing the parameter 'n'
will return the first 'n' elements of the array*/
const arr = ["eye", "ear", "nose", "hand", "leg","hair"]; 
const n=2 ; 
//arr.splice(n); 
//console.log("First element: "+arr[0]);
//console.log("First n element: " +arr); // Output: [1, 2, 3]
 
const result= [];
for(i=0; i<n && i<arr.length; i++) {
    result.push(arr[i])
}
console.log("First element: "+arr[0])
console.log("First n element: "+result);


