/**
 * The function `sumAll` takes an array of two numbers and returns the sum of all the numbers between
 * the two numbers, inclusive.
 * @param arr - The parameter `arr` is an array containing two numbers.
 * @returns the sum of all the numbers in the range specified by the input array [1, 4]. In this case,
 * the sum of the numbers 1, 2, 3, and 4 is being returned, which is 10.
 */
function sumAll(arr){
    let resultOfAll=0;
    let min=arr[0]
    let max=arr[1]
    for (let i=min;i<=max;i++){
    resultOfAll+=i 
}
return  resultOfAll
}
alert(sumAll([1, 4]))