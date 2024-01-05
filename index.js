function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for (let j = i+1; j < array.length; ){
      if (array[i] + array[j] === target) {
        return true;
      }
      j++;
      // return false;S
    }
    
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
  O(n*n) => O(n^2)
*/

/* 
  Add your pseudocode here
  Iterate throught the array at index i
  Also iterate at index j
  Sum elements of the array at index i and j 
  Compare the sum to the target
*/

/*
  Add written explanation of your solution here
  Sum any two elements of the array and check if they are equal to target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
