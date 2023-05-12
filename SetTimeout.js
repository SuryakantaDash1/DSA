function a() {
    let x = 5;
    setTimeout(function(){
        console.log(x);
    }, 5000);
}

a();

// setTimeout (() => {
//     console.log("hello");
// }, 5000);


setTimeout(() => {
    console.log("Hello");
}, 8000);

