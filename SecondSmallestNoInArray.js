let arr = [21, 5, 6, 9, 16, 7];
let Small = Number.MAX_VALUE;
let secondSmall = Number.MAX_VALUE;
for(let i = 0; i < arr.length; i++){
    if(Small > arr[i]){
        secondSmall = Small;
        Small = arr[i];
    }
    if(secondSmall > arr[i] && Small < arr[i]){
        secondSmall = arr[i];
    }
}
console.log(secondSmall);