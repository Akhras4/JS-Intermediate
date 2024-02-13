/**
 * The function `findLongestWord` takes a string as input and returns the length of the longest word in
 * the string.
 * @param word - The parameter "word" is a string that represents a sentence or a collection of words.
 * @returns the length of the longest word in the given sentence.
 */
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