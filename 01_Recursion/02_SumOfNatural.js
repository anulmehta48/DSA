function sum(n){
    if(n==0){
        return 0
    }else{
        return sum(n-1)+n
    }
}
console.log(sum(7));
// TC-O(n)
// SC-O(n)

function sum(n){
    return n*(n+1)/2
}
console.log(sum(7));
//TC-O(1)



function sum(n){
    let s=0;
    for(let i=1;i<=n;i++){
        s=s+i
    }
    return s
}

console.log(sum(7));
//TC-O(n)