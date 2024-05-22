// let arr=[1,2,3,4,,8,6,4,41]
// let key=5
// function LinearSearch(arr,key){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==key){
//             return i
//         }
//     }
//     return -1
// }
// console.log(LinearSearch(arr,key));
//TC - O(N)
//SC - O(1)

// Tansposition Linear serach
// In this we swap the arr[i] value with arr[i-1] that means privioues one so next time our search will fast
// let arr=[1,2,3,4,,8,6,4,5]
// let key=5
// function LinearSearch(arr,key){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==key){
//             let temp=arr[i]
//             arr[i]=arr[i-1]
//             arr[i-1]=temp;
//             return i-1
//         }
//     }
//     return -1
// }
// console.log(LinearSearch(arr,key));
// TC - O(N)
// SC - O(1)


//Move to front/Head

let arr=[1,2,3,4,7,8,6,4,5]
let key=5
function LinearSearch(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            let temp=arr[i]
            arr[i]=arr[0]
            arr[0]=temp;
            return arr[0]
        }
    }
    return -1;
}
console.log(LinearSearch(arr,key));





// Methods 
// 1. at => It is use to find the element using value of index of array it return the element and it has negative index value also.
//          if you know index then return value otherwise it return undefined
// let arr=[1,2,3,4,5]
// let result=arr.at(3)
// console.log(result);
// let result2=arr.at(-3)
// console.log(result2);

// 2.find => find is used to itrate and find the compaired values and return that value if it true otherwise return undefined 
//            It is same like filter but only diffrece is it not return array of element
// let arr=[1,2,3,4,5]
// let result=arr.find((ele)=>ele>4)
// console.log(result);
// console.log(arr);

// 3.findIndex => findIndex take a function and whichever value is return from function that value of index return by the findIndex
//                  and it return only first element index of array if not then -1 return
// let arr=[1,2,3,4,5]
// function large(e){
//     return e>5
// }
// let result=arr.findIndex(large)
// console.log(result);

// 4.indexOf => indexOf is use for find the index of element and if not then return -1 
// let arr=[1,2,3,4,4,5]
// let result=arr.indexOf(9)
// console.log(result);

// filter => filter is use for compare the values and return the values in new array and if not then empty array []
// let arr=[1,2,3,4,5]
// let result=arr.filter((e)=>e>5)
// console.log(result);

//