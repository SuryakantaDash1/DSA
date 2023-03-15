let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];
let misnum = ((arr.length + 1) * (arr.length + 2)) / 2;

for( let i = 0; i < arr.length; i++) {
    misnum = misnum - arr[i];
}
console.log(misnum);


