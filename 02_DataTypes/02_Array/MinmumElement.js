//Smaller for //
let arr=[2,54,21,8,5,1,63,5,7]
function MinElement(arr){
    let Min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<Min){
            Min=arr[i]
        }
    }
    return Min;
}
console.log(MinElement(arr));
// TC-O(n)
