let arr = [21, 5, 6, 9, 16, 7];
let Small = Number.MAX_VALUE;
let secSmall = Number.MAX_VALUE;
for(let i = 0; i < arr.length; i++){
    if(Small > arr[i]){
        secSmall = Small;
        Small = arr[i];
    }
    if(secSmall > arr[i] && Small < arr[i]){
        secSmall = arr[i];
    }
}
console.log(secSmall);