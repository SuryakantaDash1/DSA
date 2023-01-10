let arr = [5, 9, 2, 4, 1, 7, 6];
let largest = Number.MIN_VALUE;
let slargest = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++){
    if(largest < arr[i]) {
        slargest = largest;
        largest = arr[i];
    }
    if(slargest < arr[i] && largest > arr[i]) {
        slargest = arr[i];
    }
}
console.log(slargest);