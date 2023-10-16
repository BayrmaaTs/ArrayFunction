/* Write a JavaScript program to map array values to an object using a function.
 The keyvalue pairs consist of the original value as the key and the mapped value*/
 const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
const squareIt = arr => mapObject(arr, a => a * a);
console.log(squareIt([1, 2, 3])); 