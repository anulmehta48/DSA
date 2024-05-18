// Anagram => If words letter are same number time appear in both word then both are the anagram



let str1="PRTS"
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

