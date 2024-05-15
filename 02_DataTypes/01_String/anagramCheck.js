
let str1="ABCD"
let str2="ABCS"
function anagram(str1,str2){
    for(let i=0;i<str1.length;i++){
        if(str1[i]!==str2[i]){
            return false;
        }
    }
    return true
}
console.log(anagram(str1,str2));

//