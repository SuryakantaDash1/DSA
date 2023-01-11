let arr = [21, 5, 6, 9, 16, 7];
let small = Number.MAX_VALUE;
let ssmall = Number.MAX_VALUE;

for (let i = 0; i < arr.length; i++) {
    if(small < arr[i]) {
        ssmall = small;
        small = arr[i];

    }
    if (ssmall < arr[i] && small > arr[i]) {
        ssmall = arr[i];
    }
}
console.log(ssmall);