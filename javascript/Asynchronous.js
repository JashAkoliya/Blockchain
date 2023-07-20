// console.log("n1");
// setTimeout(()=> console.log("n2"),1000); // wait in queue for synchronous task to finish the execution
// console.log("n3");


let func1 = () => {
    console.log("f1 start");
    func2();
    console.log("f1 end");
}
let func2 = ()=>{
    setTimeout(()=>console.log("f2 start"),0);
}
func1();
