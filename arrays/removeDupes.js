/**
 * Problem Statement: (https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/)
 * Given an integer array nums sorted in "non-decreasing order", (I take this as ascending order) 
 * remove the duplicates in-place such that each unique element appears only once. (in-place meaning don't use a new datastructure)
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 * 
 * 
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).

 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = nums => {
    // start pointer 1 at index 0
    let ptr1 = 0;

    // start the pointer at 1+ 1st pointer position
    let ptr2 = 1;        


    // iterate until ptr2 goes out of bounds
    while (ptr2 < nums.length) {
        if (nums[ptr1] === nums[ptr2]) {
            nums[ptr2] = '_' ;
            
        }
        else if (nums[ptr1] < nums[ptr2]) {
            ptr1++;
            nums[ptr1] = nums[ptr2];
        }

        ptr2++;
        
    }

    console.log(nums);

    // return size of the valid part of the array after dupes are removed
    return ptr1+1; 
}

let nums = [1,2];

console.log(removeDuplicates(nums));