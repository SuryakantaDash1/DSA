let arr = [21, 5, 6, 2, 4, 9, 16, 7];
let Small = Number.MAX_VALUE;
let sSmall = Number.MAX_VALUE;
for(let i = 0; i < arr.length; i++){
    if(Small > arr[i]){
        sSmall = Small;
        Small = arr[i];
    }
    if(sSmall > arr[i] && Small < arr[i]){
        sSmall = arr[i];
    }
}
console.log(secondSmall);