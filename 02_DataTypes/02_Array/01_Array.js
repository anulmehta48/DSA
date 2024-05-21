let a = 10; // this is scalar variable or  single valued variable

let b = [2, 5, 2, 5, 8, 9, 10]; // this is vector or array or multiple valued variable

//Array=> Array is collection of elements that may be same or may not be same elements.
//        Array is ordered collection data and element stored based on index
//        In javascript gives a flexibilty that you can store multiple type of data in one array.

//Display or print
// let arr=[2,5,9,6,3,7,5,2]
// console.log(arr[0]);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// ! *****************************CREATE*******************************
//Instert/push/append => Push is add one or more element in end of the array and it returns new length of array (Original)
// let arr=[1,2,5,3,5,8]
// let s=arr.push(10)
// console.log(s);
// console.log(arr);

// arr.push(5,52,42)// multiple element at one time
// console.log(arr);

//! ***************************READ************************************ 

// Array is mutable
// let arr=[2,5,9,6,3,7,5,2]
// console.log(arr);
// arr[5]=22
// console.log(arr);

//! *****************************Update******************************** 

//splice=> splice is used for three work add,delete,update in original array and always return deleted element(original)
// let arr=[1,2,3,4,5]
// let result=arr.splice(2,2) 
// console.log(result);
// console.log(arr);

// let result2=arr.splice(2,2,10) 
// console.log(result2);
// console.log(arr);

//unshift => unshift is used to add one or more element in front or start of array and it returns new length of array(Original)
// let arr=[1,2,3,4,5]
// let result=arr.unshift(5,2,6)
// console.log(result);
// console.log(arr);


//! ************************************DELETE******************************

//Delete/popn => pop is removed only last one element from arrat and returned removed elemet of array.(Original)
// let arr=[1,2,3,4,5]
// let as=arr.pop()
// console.log(as);
// console.log(arr);

//slice => slice is used to remove element and add in new array but not removed from original array(Duplicate)
//          slice also used nagative index also
// let arr=[1,2,3,4,5]
// let result=arr.slice(2)
// console.log(result);
// console.log(arr)

// let result2=arr.slice(-2)
// console.log(result2);
// console.log(arr)


//shift =>shift is used to delete only first one element from array and return deleted element.(Original)
// let arr=[1,2,3,4,5]
// let result=arr.shift()
// console.log(result);
// console.log(arr);