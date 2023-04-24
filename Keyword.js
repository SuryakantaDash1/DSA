let arr = [2, 4, 5, 6, 8, 1,  9, 10];

let max = Number.MIN_VALUE;
let SecondMax = Number.MIN_VALUE;

for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        SecondMax = max;
        max = arr[i];
       
    }
    if(SecondMax < arr[i] && max > arr[i]){
        Smax = arr[i];
    }
}
console.log(Smax);