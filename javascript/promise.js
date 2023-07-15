//create a promise

//this is the executor function
let promise = new Promise(function(resolve,reject){
    // pretend it take time for jack and jill to bring water
    // setTimeout(()=>{
    //     //success condition - water has been fetched
    //     resolve("Hurray jack and jill are back with water")
    // },2000);

    setTimeout(()=>{
        // throwing an error
        reject(
            new Error("jack fell down and brock his crown and jill came trumbling after")
        )
    },5000);
    // console.log("hello");
});

//consumer function - the one which will receive promise
let gp = ()=>{
    // then will indicate that the promise has been fulfilled
    // promise.then(function(result){  // then indicate that the promise is been fulfilled.
    //     console.log(`cooking the vegetable with the ${result}`);
    // });

    //try and catch are used for error handling
    promise.catch(function (error){
        console.log(`omg ${error.message}`);
    });
    // console.log("hii");
};
gp();


//task :- implement both reject and resolve for this example
//promise.then.catch = promise chaining

let gp2 = ()=>{
    // then will indicate that the promise has been fulfilled
    promise.then(function(result){  // then indicate that the promise is been fulfilled.
        console.log(`cooking the vegetable with the ${result}`);
    })
    //try and catch are used for error handling
    .catch(function (error){
        console.log(`omg ${error.message}`);
    });


};
gp();

// console.log("hello");