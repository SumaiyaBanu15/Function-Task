// <-------- ODD NUMBER -------->

// 1.Print odd Number in an array

//  ***** Function *****

let arr = [1,2,3,4,5,6,7,8,9,10];

function oddNumber(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(oddNumber(arr));

// ***** Anonymous Function *****

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let oddNumbers = function(arr1){
    let result1 = [];
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]%2 !==0){
            result1.push(arr1[i]);
        }
    }
    return result1;
}
console.log(oddNumbers(arr1));

// ***** IIFE *****

(function odd(arr2) {
    let result2 = [];
    for(let i=0; i<arr2.length; i++){
        if(arr2[i]%2 !==0){
            result2.push(arr2[i]);
        }
    }
    console.log(result2);
})([1,2,3,4,5,6,7,8,9,10]);

// ***** Arrow Function *****

let oddArray = (arr3) => {
    let result3 = [];
    for(let i=0; i<arr3.length; i++){
        if(arr3[i]%2 !==0){
            result3.push(arr1[i]);
        }
    }
    return result3;
};
console.log(oddArray([1,2,3,4,5,6,7,8,9,10]));


// <-------- TITLE CAP -------->

// 2.Convert all the strings to title caps in a string array 

// ***** Function *****

function titleCase(str) {
    let stringArr = str.toString();
    let strArr = stringArr.toLowerCase().split(" ");
  
    for (let i=0; i<strArr.length; i++) {
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1); 
    }
    return strArr.join(' ');
  }
  let str = ["this is a javascript"];
  console.log(titleCase(str));

// ***** Anonymous Function *****

let titleCases = function(str1) {
    let stringArr1 = str1.toString();
    let strArr1 = stringArr1.toLowerCase().split(" ");
  
    for (let i=0; i<strArr1.length; i++) {
      strArr1[i] = strArr1[i].charAt(0).toUpperCase() + strArr1[i].slice(1); 
    }
    return strArr1.join(' ');
  }
  let str1 = ["this is a javascript"];
  console.log(titleCases(str1));

// ***** IIFE *****

(function(str2) {
    let stringArr2 = str2.toString();
    let strArr2 = stringArr2.toLowerCase().split(" ");
  
    for (let i=0; i<strArr2.length; i++) {
      strArr2[i] = strArr2[i].charAt(0).toUpperCase() + strArr2[i].slice(1); 
    }
    let resultedArr = strArr2.join(' ');
  console.log(resultedArr);
  
  }) (["this is a javascript"]);

// ***** Arrow Function *****

let titleCased = (str3) => {
    let stringArr3 = str3.toString();
    let strArr3 = stringArr3.toLowerCase().split(" ");
  
    for (let i=0; i<strArr3.length; i++) {
      strArr3[i] = strArr3[i].charAt(0).toUpperCase() + strArr3[i].slice(1); 
    }
    return strArr3.join(' ');
  }
  let str3 = ["this is a javascript"];
  console.log(titleCased(str3));


// <-------- SUM OF ALL NUMBERS -------->

// 3.Sum of all numbers in an array

// ***** Function *****

function sumOfNumbers(num){
    let sum = 0;
    for(let i=0;i<=num.length;i++){
        sum = sum+i;
    }
    return sum;
}
let num = [1,2,3,4,5,6,7,8,9,10];
console.log(sumOfNumbers(num));

// ***** Anonymous Function *****

let sumOfNums = function(num1){
    let sum1 = 0;
    for(let i=0;i<=num1.length;i++){
        sum1 = sum1+i;
    }
    return sum1;
}
let num1 = [1,2,3,4,5,6,7,8,9,10];
console.log(sumOfNums(num1));

// ***** IIFE *****

(function sumOf(nums)
{
    let sum2=0;
    for (let i=0; i<=nums.length; i++)
    {
        sum2 = sum2 + i;
    }
        console.log(sum2);

})([1,2,3,4,5,6,7,8,9,10]);

// ***** Arrow Function *****

let sumOfNumber = (num3)=>
{
    let sum3 = 0;
    for (let i=0; i<=num3.length; i++)
    {
        sum3 = sum3 + i;
    }
      return sum3;
}
let num3 = [1,2,3,4,5,6,7,8,9,10];
console.log(sumOfNumber(num3));


// <-------- PALINDROME -------->

// 4.Return all the palindromes in an array

// ***** Function *****

let array1 = ["malayalam", 12121, "level", 2222, "hello", 2341, "madam"];
function isPalindromes(array1){
let palindromes = [];

for(let i=0; i<array1.length; i++)
{
    let str = array1[i].toString();
    let reversed = str.split('').reverse().join('');

    if(str === reversed){
        palindromes.push(array1[i]);
    }
}
return palindromes;
}
console.log(isPalindromes(array1));

// ***** Anonymous Function *****

let array2 = ["malayalam", 12121, "level", 2222, "hello", 2341, "madam"];
let palindromeIs = function (array2){
let palindromeArr = [];

for(let i=0; i<array2.length; i++)
{
    let str = array2[i].toString();
    let reversed = str.split('').reverse().join('');

    if(str === reversed){
        palindromeArr.push(array2[i]);
    }
}
return palindromeArr;
}
console.log(palindromeIs(array2));


// ***** IIFE *****

(function isPalindrome(arr){

    let palindrome = [];
    for(let i=0; i<arr.length; i++)
    {
        let str = arr[i].toString();
        let reversed = str.split('').reverse().join('');
    
        if(str === reversed){
            palindrome.push(arr[i]);
        }
    }
    console.log(palindrome);
    }) (["malayalam", 12121, "level", 2222, "hello", 2341, "madam"]);
    
    // ***** Arrow Function *****

let array3 = ["malayalam", 12121, "level", 2222, "hello", 2341, "madam"];

let isPalindromeArray =(array3)=>
{

let palindromeArray = [];
for(let i=0; i<array3.length; i++){
    let str = array3[i].toString();
    let reversed = str.split('').reverse().join('');

    if(str === reversed){
        palindromeArray.push(array3[i]);
    }
}

return palindromeArray;
} 
 console.log(isPalindromeArray(array3));