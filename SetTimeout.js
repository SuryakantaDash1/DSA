function a() {
    let x = 5;
    setTimeout(function(){
        console.log(x);
    }, 5000);
}
a();

// setTimeout(() => {
//     console.log("Hello");
// }, 5000);
