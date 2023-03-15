function countAverageElements(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / arr.length;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === avg) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage
  console.log(countAverageElements([2,2,2,2,2])); // Output: 5
  console.log(countAverageElements([1,3,2,4,5])); // Output: 1
  