let arr = [2, 4, 5, 8, 12, 10, 9, 7];
let largest = Number.MIN_VALUE;

for(let i = 0; i < arr.length; i++) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);

