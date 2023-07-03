function callBack(){
    console.log("I am callback function");
}

function highOrder(func){
    console.log("I am high order function");
    func();
}

highOrder(callBack);