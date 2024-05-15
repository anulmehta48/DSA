/*
  Primitive => Simple/immutable => String,Number,Boolean,Null,Undefined,Symbol,BigInt.

  Non-Primitive=> Complex/mutable => Array,Object,Functions.
*/ 

/*
   String=> Sequence of character is called string

   ASCII=> American Standard Code for information Interchange

   A-Z => 65-90

   a-z => 97-122

   0-9 => 48-57

   Enter => 10
   SpaceBar => 13
   Escape => 27

   ASCII total key = 0-127 => 128
   
   */

//    let name="vishwa"
//    console.log(typeof name);

//    name[0]="K" // not changed because it is immuatble 
//    console.log(name);

// Methods =>
// 1.String Interpolation
// let name="Anul"
// let tech=52
// console.log(name +52 + "sss");  //this is old way to concat

// let result=`my name is ${name} and my tech is ${tech}`
// console.log(result);


// 2. Length
let name="MunnaBhaiMbbs"
console.log(name.length);


//3.concat
let firstName="lokesh"
let lastName="sharma"
let fullName=firstName.concat(lastName)
console.log(fullName);
console.log(firstName+lastName); 

//4.converted into uppercase
console.log(fullName.toUpperCase());

//5 check character of index 
//fullName = lokesh sharma
console.log(fullName.charAt(5));

	// Original string
	let str = 'Geeks';

	// Joining the strings together
	let value = str.concat(' for', ' Geeks');
	console.log(value);
//