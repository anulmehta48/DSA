function fact(n){
    if(n==0||n==1){
        return 1
    }
    return fact(n-1)*n
}
console.log(fact(5));


function fact2(n){
    let mul=1;
    for(let i=1;i<=n;i++){
        mul=mul*i
    }
    return mul;
}
console.log(fact2(5));