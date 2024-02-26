//function is the block of code or dead code 

// function jagdish(){
//      var a=10
//      console.log(a)
// }
// jagdish()

// a fn that is declared using function keyword

// function jagdish(){
//      var a=10
//      console.log(a)
// }
// jagdish()

// when we assign a fn  to variable is called fn expression
// const ram=function jagdish(){
//      var a=10
//      console.log(a)
// }
// ram()

// arrow fn is the conscise way of writig a fn

// const ram=()=>{
//      var a=10
//      console.log(a)
// }
// ram()


// IIFE  is the self invoking fn 

// (function(){
//    console.log("hello")
// }())



function jagdish(x,y){
   return x+y;
}


function sum(x,y,callback){
    const result=callback(x,y)
    console.log(result)

}
sum(4,6,jagdish)