let arr = [5, 9, 2, 4, 1, 7, 6];
let Largest = Number.MIN_VALUE;
let secLargest = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++){
    if(Largest < arr[i]) {
        secLargest = Largest;
        Largest = arr[i];
    }
    if(secLargest < arr[i] && Largest > arr[i]) {
        secLargest = arr[i];
    }
}
console.log(sLargest);