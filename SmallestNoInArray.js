let arr = [4, 5, 2, 8, 9, 7];
let SmallNo = Number.MAX_VALUE;
for(let i = 0; i<arr.length; i++){
    if(SmallNo > arr[i]){
        SmallNo = arr[i];
    }
}
console.log(SmallNo);