// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

var numIdenticalPairs = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i ++) {
    for (let j = i + 1; j < nums.length; j ++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))  //4