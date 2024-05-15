// function countWords(str){
//     let wordCount=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==" "){
//             wordCount++
//         }
//     }
//     return wordCount+1
// }
// console.log(countWords('Hello my name is anul'));


//if multiple space are give 
function countWords(str){
    let wordCount=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==" " && str[i-1]!=" "){
            wordCount++
        }
    }
    return wordCount+1
}
console.log(countWords('Hello my name is anul'));