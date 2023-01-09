let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let Misarr = ((arr.length + 1) * (arr.length + 2)) / 2;

for (let i = 0; i < arr.length; i++) {
    Misarr = Misarr - arr[i];
}

console.log(Misarr);