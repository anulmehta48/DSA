//Palindrom => A word that you reverse then read that is equal to privoues that is called palidrom
//              if you read in both side that is same readable that is called palindrom

/**Solution=> 1.Reverse 
              2.Compaire
*/

// let str = "Anul";
// function palidromCheck(str) {
//   let result = str.split("").reverse();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == result[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(palidromCheck(str));

//Another way
// let str = "Nitin";
// function palidromCheck(str) {
//     let nstr=str.toUpperCase()    
//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (nstr[i] !== nstr[j]) {  
//         return false
//     }
//     i++;
//     j--;
//   }
//   return true;
// }
// console.log(palidromCheck(str));




let str = "LOEKEsh";
function palidromCheck(str) {
   
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i].toUpperCase() !== str[j].toUpperCase()) {  
        return false
    }
    i++;
    j--;
  }
  return true;
}
console.log(palidromCheck(str));



