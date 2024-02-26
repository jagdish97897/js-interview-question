//A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and basically using for handling the callback hall

const ticket=new Promise(function(resolve, reject){

    const isBoarded=true;
    if(isBoarded){
        resolve("you are in the flight")
    }else{
        reject("flight cancelled")
    }

})
//callback mathod for resolve is then and reject is catch
ticket.then((data)=>{
    
    console.log("wow",data)
}).catch((data)=>{
    console.log("oh no",data)
}).finally(()=>{
    console.log("i will always be executed")
})




// function getpani(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const pani="pani";
//             console.log("here is pani", pani)
//              resolve(pani);
//         }, 2000);
//     })
 
// }

// function makedough(pani){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dough=pani+"dough";
//             console.log("here is dough", dough)
//              resolve(dough);
//         }, 2000);
//     })
  
// }

//     function makeroti(dough){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 const roti=dough+"roti";
//                 console.log("here is roti", roti)
//                  resolve(roti);
//             }, 2000);
//         })

// }


// getpani().then((pani)=>{
//     console.log("here is the pani",pani);
//     return makedough(pani);
// }) .then((dough)=>{
//     console.log("here is the dough",dough)
//     return makeroti(dough);
// }).then((roti)=>{
//     console.log("here is my roti",roti)
// }).catch((data)=>{
//     console.log("error",data)
// })







// function getpani(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const pani="pani";
//             console.log("here is pani", pani)
//              resolve(pani);
//         }, 2000);
//     })
 
// }

// function makedough(pani){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dough=pani+"dough";
//             console.log("here is dough", dough)
//              resolve(dough);
//         }, 2000);
//     })
  
// }

//     function makeroti(dough){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 const roti=dough+"roti";
//                 console.log("here is roti", roti)
//                  resolve(roti);
//             }, 2000);
//         })

// }
// //Async simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.
// //The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.
// async function orderroti(){
//     const pani=await getpani();
//     console.log("here is the pani",pani)
//     const dough=await makedough(pani);
//     console.log("here is the dough",dough)
//     const roti=await makeroti(dough);
//     console.log("here is the roti",roti)

// }
// orderroti()