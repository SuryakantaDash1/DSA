let arr = [21, 5, 6, 9, 16, 7];
let Small = Number.MAX_VALUE;
let sSmall 
for(let i = 0; i < arr.length; i++){
    if(Small > arr[i]){
        sSmall = Small;
        Small = arr[i];
    }
    if(sSmall > arr[i] && Small < arr[i]){
        sSmall = arr[i];
    }
}
console.log(sSmall);