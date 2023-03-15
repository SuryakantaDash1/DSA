// function avgOfLargestAndSmallest(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     let sum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       sum += arr[i];
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     let avg = (min + max) / 2;
//     return avg;
//   }
  
//   console.log(avgOfLargestAndSmallest([1, 4, 3, 2])); 
//   console.log(avgOfLargestAndSmallest([1, 4, 3, 4]));

function findAvgLargestSmallest(arr) {
    // Find the largest and smallest numbers in the array
    let largest = arr[0];
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    // Calculate the average of the largest and smallest numbers
    let average = (largest + smallest) / 2;
    return average;
  }
  
  // Test the function with some example inputs
  console.log(findAvgLargestSmallest([1, 4, 3, 2])); // Output: 2.5
  console.log(findAvgLargestSmallest([1, 4, 3, 4])); // Output: 3
  