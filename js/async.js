// promise internal state:-
// resolve
// reject
// pending

/*
async function f1(){
    // return Promise.resolve(1);
    return 1;
}
f1().then(console.log("success"));
*/

async function f(){  //  async for declaration of the promise
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done"),6000)
    });
    let res = await promise;  // await to fetch the promise
    // await promise means whatever the output from the promise wait till the promise get executed

    console.log(`success - the result is ${res}`);
    console.log("Hello");
    console.log("Blockchain");
}
f();

