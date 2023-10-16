/*Write a JavaScript program to find every element in any of the two given arrays at once, using
the provided comparator function.*/



function findElementsInArr(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let uniqueEle = mergedArray.filter(function (element, index, self) {
        return self.indexOf(element) === index;
    });
    return uniqueEle;
}
 
let arr1 = [1, 2, 3, 4,7];
let arr2 = [3, 4, 5, 6];
let result = findElementsInArr(arr1, arr2);
console.log(result);