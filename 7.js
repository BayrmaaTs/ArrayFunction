/*Write a JavaScript program to create an array out of the arrays by creating each possible
pair from the arrays. */

const pair = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
console.log(pair([10, 20], ['A', 'B']));
console.log(pair([10, 20], [15, 25]));
console.log(pair(['a', 'b'], ['c', 'd']));