// let arr = [5, 5, 10, 15];
// function sum(current, second) {
//     return current + second;
// }
// let ans = arr.reduce(sum);
// console.log(ans);

// let arr = [2, 4, 6, 8, 10];
// function double(num){
//     return num*2;
// }
// let ans = arr.map(double);
// console.log(ans);
let arr = [2, 4, 6, 7, 8];
function fun(number, index){
    console.log(`index is ${index} number is ${number}`);
}
let ans = arr.forEach(fun);
console.log(ans);
