// const arr = [1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 6, 6, 6, 6, ];
// const DupArr = [...new Set(arr)];
// console.log(DupArr);


const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let Misnum =  ((arr.length + 1) * (arr.length + 2)) / 2;

for(let i = 0; i < arr.length; i++){
    Misnum = Misnum - arr[i];
}

console.log(Misnum);


