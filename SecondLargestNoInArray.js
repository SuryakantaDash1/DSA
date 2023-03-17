let arr = [5, 9, 2, 4, 1, 7, 6];
let Largest = Number.MIN_VALUE;
let sLargest = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++){
    if(Largest < arr[i]) {
        sLargest = Largest;
        Largest = arr[i];
    }
    if(sLargest < arr[i] && Largest > arr[i]) {
        sLargest = arr[i];
    }
}
console.log(sLargest);