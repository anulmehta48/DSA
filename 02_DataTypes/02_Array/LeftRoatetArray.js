//Left shift/ Left Rotatete
// arrr= [1,2,3,4,5 ]
// ans=[2,3,4,5,1]

// example - in LED Display board
let arr=[1,2,3,4,5] //2,3,4,5,1
let k=1
function ReverseArray(arr,i,j){
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--;
    }
    return arr
}
console.log(ReverseArray(arr,0,arr.length-1)); //all element reverse
console.log(ReverseArray(arr,0,arr.length-2)); // start to length-2 (left last element)
//TC-O(n)