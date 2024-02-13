function findLongestWord(word) {
    let arr = word.split(" ")
    let max_length=arr[0].length 
    for (let i=0;i<arr.length;i++){
       if(arr[i].length>max_length){
           max_length=arr[i].length
        }
      }return max_length
}
console.log(findLongestWord("May the force be with you")) 