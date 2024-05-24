// let arr = [10, 20, 30, 40, 45, 50, 60, 70, 72];
// let key = 72;

// function BinarySearch(arr, key) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid;
//   while (start <= end) {
//     mid = Math.floor(start + (end - start) / 2);
//     if (key == arr[mid]) {
//       return mid;
//     } else if (key < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }
// console.log(BinarySearch(arr, key));
//TC-O(logn)

// write Binary search
// let arr = [10, 20, 30, 40, 45, 50, 60, 70, 72];
// let key = 72;
// let start = 0;
// let end = arr.length - 1;
// function BinarySearch(start, end, key) {
//   while (start <= end) {
//     let mid = Math.floor(start + (end - start) / 2);
//     if (key == arr[mid]) {
//       return mid;
//     } else if (key < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }
// console.log(BinarySearch(start, end, key));

//Write Recursive Binary search
// let arr = [10, 20, 30, 40, 45, 50, 60, 70, 72];
// let key = 72;
// let start = 0;
// let end = arr.length - 1;
// function RecBinarySearch(start, end, key) {
//   if (start > end) {
//     return -1; // Base case: key not found
//   }
//   let mid = Math.floor(start + (end - start) / 2);
//   if (key == arr[mid]) {
//     return mid; // Base case: key found
//   } else if (key < arr[mid]) {
//     return RecBinarySearch(start, mid - 1, key); // Search in the left half
//   } else {
//     return RecBinarySearch(mid + 1, end, key); // Search in the right half
//   }
// }
// console.log(RecBinarySearch(start, end, key));
//TC-O(logn)


// let arr=[10,20,30,40,50]
// let key=20;
// let start=0;
// let end=arr.length-1;
// function BinarySearch(arr,start,end,key){
//   while(start<=end){
//     let mid=Math.floor(start+(end-start)/2)
//     if(key ==arr[mid]){
//       return mid
//     }else if(key < arr[mid]){
//       end=mid-1;
//     }else{
//       start=mid+1;
//     }
//   }
//   return -1
// }
// console.log(BinarySearch(arr,start,end,key))


