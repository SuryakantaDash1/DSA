function test(arr_nums) 
 {
  return arr_nums.sort((x,y) => y - x)[arr_nums.length-3]
}

nums = [2, 3, 5, 7, 1]
console.log("Original array of numbers: "+nums)
console.log("Third smallest number of the said array of numbers: "+test(nums));
nums = [2, 3, 0, 5, 7, 8, -2, -4]
console.log("Original array of numbers: "+nums)
console.log("Third smallest number of the said array of numbers: "+test(nums));
