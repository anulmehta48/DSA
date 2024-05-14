
function pow(n,m){
    if(n==0){
        return 1
    }
    return pow(m,n-1)*m
}
console.log(pow(2,5));




// function pow(n,m){
//     if(n==0){
//         return 1
//     }
//     if(n%2==0){
//         return pow(m*m,n/2)
//     }else{
//         return m*pow(m*m,(n-1)/2)
//     }
// }
// console.log(pow(2,5));