//check array is sorted or not
let arr=[10,20,130,40,50]
function CheckSorted(arr){
    for(let i=0;i<arr.length;i++){
        if((arr[i]>arr[i+1])){
            return false 
        }
    }
    return  true
}
console.log(CheckSorted(arr));