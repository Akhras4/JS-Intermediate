/**
 * The function `largestOfFour` takes in a 2D array and returns an array containing the largest number
 * from each subarray.
 * @param arr - [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [100, 43, 6, 5]]
 * @returns The function `largestOfFour` returns an array containing the largest number from each
 * subarray of the input array.
 */
function largestOfFour(arr) {
    let newarr=[]
    /* The code is using a for loop to iterate through the elements of the `arr` array. */
    for(let i=0 ; i< arr.length ; i++){
       let x=arr[i][0];
      for(z=0;z<arr[i].length ;z++){
        if(arr[i][z]>x){
            x=arr[i][z]
        }
      }
      newarr.push(x)
    }
 return newarr
}





console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], 
    [32, 35, 37, 39], [100,43,6,5]]))