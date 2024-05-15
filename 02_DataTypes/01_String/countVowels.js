function coutVowel(str){
    let vowelCount=0;
    let consonantCount=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||
        str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
            vowelCount++
        }else{
            consonantCount++
        }
    }
    return [vowelCount,consonantCount]
}
console.log(coutVowel("Hello my name is Anul"));