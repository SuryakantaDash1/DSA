let arr = [2, 4, 1, 6, 8, 9, 5];
let larg = Number.MIN_VALUE;
let secondLarg = Number.MIN_VALUE;
for(let i =0; i < arr.length; i++){
    if(larg < arr[i]){
        secondLarg = larg;
        larg = arr[i];
    }
    if(secondlarg < arr[i] && larg > arr[i]){
        secondlarg = arr[i];
    }
}
console.log(secondlarg);