/**
 * The function `sumAll` takes an array of two numbers and returns the sum of all the numbers between
 * those two numbers, inclusive.
 * @param arr - The parameter `arr` is an array containing two numbers.
 * @returns the sum of all the numbers between the first and second elements of the input array. In
 * this case, it will return 10.
 */
function sumAll(arr){
    let resultOfAll=0;
    let FirstNumber=arr[0]
    let LastNumber=arr[1]
    if (FirstNumber>LastNumber){
      for (let i=FirstNumber;i>=LastNumber;i--){
          resultOfAll+=i 
      }  
    }else{
      for (let i=FirstNumber;i<=LastNumber;i++){
        resultOfAll+=i 
     }
    }
return  resultOfAll
}
alert(sumAll([1, 4]))