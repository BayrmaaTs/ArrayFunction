/*Write a JavaScript program to filter out the specified values from a specified array. Return
the original array without filtered values.*/


/*
const result=[];
 for (i=0; i<n && i<color.length; i++) {
    result.push(color[i]);
 }
 console.log("Filtered value: "+result);
 console.log("Original value: "+color);
 */
function isEven(value){
    return value%2==0;
}
function isOdd(val) {
    return val%2!=0;
}
let n=[10,15,20,25,30,35,40];
console.log("Original numbers: "+n);
console.log("Even numbers: "+n.filter(isEven));
console.log("Odd numbers: "+n.filter(isOdd));
