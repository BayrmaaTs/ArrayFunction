/*Write a JavaScript program to filter out non-unique values in an array, based on a provided
comparator function. */
const array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) != arr.lastIndexOf(i));

console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5,5,5,5,8]));  
console.log(filter_Non_Unique([1, 2, 2, 4]));  
/*
const color=['white','black','white','blue','orange','black'];
const filterNonUnique=array=>array.filter(i=>array.indexOf(i)==array.lastIndexOf(i));
const filterUnique=array=>array.filter(i=>array.indexOf(i)!=array.lastIndexOf(i));
console.log("unique value: ")
console.log(filterNonUnique(['white','black','white','blue','orange','black']));
console.log("non unique value: ");
console.log(filterUnique(['white','black','white','blue','orange','black']))
console.log("Original value: "+color)
*/