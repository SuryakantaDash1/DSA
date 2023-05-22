let arr = [2, 4, 1, 6, 8, 9, 5];
let large = Number.MIN_VALUE;
let secondLarg = Number.MIN_VALUE;
for(let i =0; i < arr.length; i++){
    if(large < arr[i]){
        secondLarg = large;
        large = arr[i];
    }
    if(secondLarg < arr[i] && large > arr[i]){
        secondLarg = arr[i];
    }
}
console.log(secondLarg);