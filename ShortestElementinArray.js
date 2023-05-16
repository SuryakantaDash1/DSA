let arr = [11, 2, 5, 7, 8, 1, 10, 4];
let shortestNo = Number.MAX_VALUE;
for(let i =0; i < arr.length; i++) {
    if(shortestNo > arr[i]) {
        shortestNo= arr[i];
    }
}
console.log(shortest);