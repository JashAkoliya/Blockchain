function *disp(){
    console.log("Jash");
    console.log("preksha");
    yield "first pause"
    console.log("jay");
    yield "sec pause"
    console.log("raj");
}

let control = disp();
// control.next();
console.log(control.next());
console.log(control.next());
console.log(control.next());