//Smaller for //
// let arr=[2,54,21,8,5,1,63,5,7]
// function TotalSum(arr){
//     let Total=0
//     for(let i=0;i<arr.length;i++){
//       Total=Total+arr[i]
//     }
//     return Total;
// }
// console.log(TotalSum(arr));
// TC-O(n)


//Recursive
let arr=[2,54,21,8,5,1,63,5,7]
let n=arr.length-1
function TotalSum(arr,n){
  if(n<0){
    return 0;
  }
  return TotalSum(arr,n-1)+arr[n]
}
console.log(TotalSum(arr,n));