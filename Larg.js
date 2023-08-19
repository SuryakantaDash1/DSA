let arr = [2, 4, 1, 6, 8, 9, 5];
let large = Number.MIN_VALUE;
let secondLarge = Number.MIN_VALUE;
for(let i =0; i < arr.length; i++){
    if(large < arr[i]){
        secondLarge = large;
        large = arr[i];
    }
    if(secondLarge < arr[i] && large > arr[i]){
        secondLarge = arr[i];
    }
}

console.log(secondLarge);