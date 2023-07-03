let getTime = ()=>{

    //date :- get current time,year,...
    return new Date().getHours()+":"+ new Date().getMinutes()+":"+new Date().getSeconds();
}

function getSyncMsg(){
    return "hello";
}

function getHelloFromPromise(){
    return Promise.resolve("Hello-promise");
}

function getHelloWithDelay(){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            resolve("Hello");
        },4000);
    });
}

async function caller(){
    let msgHello =  getSyncMsg();
    console.log(getTime(),msgHello);

    let msgHelloPromise = await getHelloFromPromise();
    console.log(getTime(),msgHelloPromise);

    let msgHelloDelay = await getHelloWithDelay();
    console.log(getTime(),msgHelloDelay);
}
caller();