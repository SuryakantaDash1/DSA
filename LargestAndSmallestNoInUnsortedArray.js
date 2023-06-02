const arr = [2, 4, 5, 25, 10];
const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return {
    "max": max,
    "min": min
  };
}
console.log(findMaxMin(arr)); 