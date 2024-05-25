let arr=[1,2,3,4,5]

// function ReverseArray(arr){
//     let newArr=[]
//     for(let i=arr.length-1;i>=0;i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(ReverseArray(arr));
// TC-O(n)

// function ReverseArray(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp;
//         i++
//         j--
//     }
//     return arr
// }
// console.log(ReverseArray(arr));
// TC-O(N)

function ReverseArray(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
       arr[i]=arr[i]+arr[j]
       arr[j]=arr[i]-arr[j]
       arr[i]=arr[i]-arr[j]
       i++
       j--
    }
    return arr
}
console.log(ReverseArray(arr));