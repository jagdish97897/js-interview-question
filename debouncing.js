//debouncing limit the execution of function call an wait for certain amount of time before running it again 
let counter = 0;
function getData()  {
  // calls an API and gets Data
  console.log("Fetching Data .."+counter++);
}

function debounce (call, d) {
  let timer;
  return function (...args) {

    if(timer) 
    clearTimeout(timer)
   setTimeout(() => {
       call();
    }, d);
  }
}

const betterFunction = debounce(getData, 1000);



// // Debouncing in Javascript
// let counter = 0;
// function getData()  {
//   // calls an API and gets Data
//   console.log("Fetching Data ..", counter++);
// }

// function debounce (call, d) {
//   let timer;
//   return function (...args) {

//     if(timer) 
//     clearTimeout(timer)
//    setTimeout(() => {
//        call();
//     }, d);
//   }
// }

// const betterFunction = debounce(getData, 1000);