//Callback Hell is a situation in JavaScript where multiple nested callback functions make your code look like it’s been through a blender on the highest setting.
//This typically occurs when dealing with asynchronous operations, such as making API requests or handling file I/O, where one operation depends on the result of another or previous One.
//Here’s an example of what callback hell might look like:


// function getpani(){
//     setTimeout(()=>{
//         const pani="pani";
//         console.log("here is pani", pani)
       
//     }, 2000)
// }
// getpani()


// function getpani(callback){
//     setTimeout(()=>{
//         const pani="pani";
//         console.log("here is pani", pani)
//          callback(pani);
//     }, 2000)
// }
// getpani((pani)=>{
//     console.log("got the pani", pani)
// })



function getpani(callback){
        setTimeout(()=>{
            const pani="pani";
            console.log("here is pani", pani)
             callback(pani);
        }, 2000);
    }
 
    function makedough(pani, callback){
        setTimeout(()=>{
            const dough=pani+"dough";
            console.log("here is dough", dough)
             callback(dough);
        }, 2000);
    }

        function makeroti(dough, callback){
        setTimeout(()=>{
            const roti=dough+"roti";
            console.log("here is roti", roti)
             callback(roti);
        }, 2000);
    }
 
 
 
    getpani((pani)=>{
       makedough(pani, (dough)=>{
             makeroti(dough, (roti)=>{
                console.log("got roti",roti)
             })
       })
    })
    