/* Write a JavaScript program to remove false values from a given array.*/



const check=arr =>arr.filter(Boolean);
console.log(check(['me','you',"a"*4,0,false]));