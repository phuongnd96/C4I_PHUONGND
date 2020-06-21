// function checkPalindrome(inputString) {
//   let reverseString = inputString.split("").reverse().join("");
//   console.log(reverseString);
//    return  reverseString==inputString? true:  false;
// }
// checkPalindrome("aabaa");


// function adjacentElementsProduct(inputArray) {
// let sumArr=[];
// for(let i=0;i<inputArray.length-1;i++){
//     sumArr.push(inputArray[i]*inputArray[i+1])
// }
// return Math.max(...sumArr);
// }
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
// console.log(adjacentElementsProduct([-1,-2]));

function shapeArea(n) {
    return (n==1?1:'abc') ;
}
console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));


