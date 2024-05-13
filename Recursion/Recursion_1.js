//Recursion => A function is calling itself that is called recursion
//              there is a base condition that terminate the recursion otherwise it will go in infinite calling
//              when it terminate then it will go to the function call and checked there is something remaining to execute or not then 
//               come out from function then again go to the other function call and checked same as before until all competed then come out from function

// *importaint - Recursion is like rubber band how much you statch it and when you release then it will come back.
// *           - Inside Loop we have only ascending order but inside retursion we have ascending as well as decending order that is main power of recurion 

// Example-1  => In this print is done on function calling time
// function fun1(n){
//     if(n>0){
//         console.log(n);
//         fun1(n-1)
//     }
// }
// console.log(fun1(3));


// function fun1(n){
//     if(n>0){
//         console.log(n);
//         fun1(n-1)
//         console.log("h");
//     }
// }
// console.log(fun1(3));


// Example -2  => In this print is done on function returing time
// function fun1(n){
//     if(n>0){
//         fun1(n-1)
//         console.log(n);
//     }
// }
// console.log(fun1(3));


// function fun1(n){
//     if(n>0){
//         fun1(n-1)
//         console.log(n);
//         console.log("h");
//     }
// }
// console.log(fun1(3));
/**
  Recursion is three type -
1.Tail recursion 
2.Head recursion
3.Tree recusion
4.Indirect recursion
5.Nested recursion


1.Tail => when function called is the last statement and nothing is do next that is called tail recursion 
        that means function nothing doing anything at returing time.

        example - function fun1(n){
                    if(n>0){
                        console.log(n);
                        fun1(n-1)
                    }
                }
                TC-O(n)
                SC-O(n) // here space is taking by recusion for actvation record so it better to reduce space use loop for tail recurion


                using loop=> because tail recursion easily converted in loop
                -  function fun1(n){
                    while(n>0){
                        console.log(n)
                        n--
                    }
                }
                TC-O(n)
                SC-O(1)

2.Head => when the first statment is recursive function call not anything before it that is called head recursion and in this all other 
          things happen at returing time.

          example =>  funcion fun(n){
                        if(n>0){
                            fun(n-1)
                            console.log(n)
                        }
                    }
                    TC-O(n)
                    SC-O(n)

                    // Not easy to write using loop
                -   function fun(n){
                        while(n>0){
                            n--             // this will not work
                            console.log(n)
                        }
                     }
                     TC-O(n)
                     SC-O(n)


                     //this way work
                     function fun(n){
                        let i=1;
                        while(i<=n){           
                            console.log(i)
                            i++
                        }
                     }
                     fun(3)
                     TC-O(n)
                     SC-O(n)


3.Tree => When recursive function is called more then one time then it is called Tree recursion 

        example => function fun(n){
                    if(n>0){
                        console.log(n);
                        fun(n-1);
                        fun(n-1)
                    }
                    TC-O(2^n)
                    SC-O(n)
        

4.Indirect => when one function called second function and second function called third function and third function is called first one again 
             then it make like cycle that is called indirect recuersion
                example =>   function funA(n){
                                if(n>0){
                                    console.log(n);
                                    funB(n-1)
                                }
                            }
                            funA(20)
                            function funB(n){
                                    if(n>0){
                                        console.log(n);
                                        funA(n/2)
                                    }    
                            }
                        
5.Nested => when recuersion function is passed as parameter in recursive call function that is called nested recuersion.4
            it is recuersion inside recuersion that is called nested recursion
                    example => function fun(n){
                                if(n>100){
                                    return n-10
                                }else{
                                    return fun(fun(n+11))
                                }
                            }
                            console.log(fun(95));

 * 
 * */ 

                    



                          
                            
