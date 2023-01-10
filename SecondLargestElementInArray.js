let arr = [2, 4, 5, 8, 12, 10, 9, 7];
let largestNo= Number.MIN_VALUE;

for(let i = 0; i < arr.length; i++) {
    if(largestNo < arr[i]) {
        largestNo = arr[i];
    }
}
console.log(largestNo);