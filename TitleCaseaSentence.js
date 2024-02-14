/**
 * The titleCase function takes a string as input and returns the same string with each word
 * capitalized.
 * @param text - The input text that needs to be converted to title case.
 * @returns the input text with each word capitalized.
 */
function titleCase(text){
    let arr=text.split(" ")
    for (let i=0;i<arr.length;i++){
       arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1).toLowerCase()
    }

return (arr.join(" "))
}
alert(titleCase("i'm a little tea pot")) 