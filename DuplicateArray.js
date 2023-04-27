// const arr = [1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6, ];
// const ans = [...new Set(arr)];
// console.log(ans);


const arr = [1, 2, 3, 8, 9, 10, 5, 6, 7];
let mis = ((arr.length + 1) * (arr.length + 2)) / 2;
for(let i = 0; i < arr.length; i++){
    mis = mis - arr[i];
}
console.log(mis);

