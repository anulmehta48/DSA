// function fibo(n){
//     if(n<=1){
//         return n;
//     }
//     return fibo(n-2)+fibo(n-1);
// }
// console.log(fibo(7));
//TC-O(2^n)

// function fibo(n){
//     if(n<=1){
//         return n;
//     }
//     let a=0;
//     let b=1;
//     let sum;
//     for(let i=2;i<=n;i++){
//         sum=a+b
//         a=b;
//         b=sum;
//     }
//     return sum
// }
// console.log(fibo(8));
//TC-O(n)


//using memoization -> in this function calles are reduce 

function fibo(n){
    let memo=[]
    if(n<=1){
        memo[n]=n
        return n
    }else{
        if(memo[n-2]==-1){
           memo[n-2]=fibo(n-2)
        }
        if(memo[n-1]==-1){
            memo[n-1]=fibo(n-1)
        }
        return fibo(n-2)+fibo(n-1)
    }
}
console.log(fibo(8));
