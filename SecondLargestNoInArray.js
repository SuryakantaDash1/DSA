let arr = [5, 9, 2, 4, 1, 7, 6];
let largest = Number.MIN_VALUE;
let sLargest = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++){
    if(largest < arr[i]) {
        sLargest = largest;
        largest = arr[i];
    }
    if(sLargest < arr[i] && largest > arr[i]) {
        sLargest = arr[i];
    }
}
console.log(sLargest);