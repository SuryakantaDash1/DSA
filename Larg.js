let arr = [2, 4, 1, 6, 8, 9, 5];
let larg = Number.MIN_VALUE;
let slarg = Number.MIN_VALUE;
for(let i =0; i < arr.length; i++){
    if(larg < arr[i]){
        slarg = larg;
        larg = arr[i];
    }
    if(slarg < arr[i] && larg > arr[i]){
        slarg = arr[i];
    }
}
console.log(slarg);