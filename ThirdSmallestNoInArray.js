function test(arr) 
 {
  return arr.sort((x,y) => y - x)[arr.length-3]
}

numbers = [2, 3, 5, 7, 1]
console.log("Original array : " + numbers)
console.log("Third smallest number: "+test(numbers));
numbers = [2, 3, 0, 5, 7, 8, -2, -4]
console.log("Original arrays: "+ numbers)
console.log("Third smallest number: "+test(numbers));
