const waysToSplitArray = (nums: number[]): number => {
    let validArr: number = 0;
    let totalSum: number = nums.reduce((preVal: number, currVal: number) => {
        return preVal+currVal;
    });

    let [leftSum, rightSum]: [number, number] = [0,0];
    for (let i: number = 0; i < nums.length - 1; i++) {
        leftSum += nums[i];
        rightSum = totalSum - leftSum;

        if (leftSum >= rightSum) {
            validArr++;
        }
    }

    return validArr;
};

/**
 * Problem and requirements: 
You are given a 0-indexed integer array nums of length n.

nums contains a valid split at index i if the following are true:
Requirement 1:
The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
-------------
My understanding 
if this is a 5 element array. then
1st i+1 elements sum (for e.g. say 1st 2 elements or leftmost 2 elems at index 0, 1)  is greater than the remaining array sum which will be: n-i-1 elements 
(For e.g. If I consider n to be size of the array then rightmost n = 5 - 2 - 1 = 2 i.e.  at sums of values at index 2,3,4)


Requirement 2:
There is at least one element to the right of i. That is, 0 <= i < n - 1.

My understanding: in the 5 element array, the last valid possibility is 4 left, and 1 right. 
For our understanding, besided the positive case here;s a corollary case
E.g. [1,1,1,1,4]
[1,1,1,1] >= [4] is valid

but...
[1], [1,1,1, 4]
[1,1], [1,1, 4]  
[1,1,1], [1, 4] will all be invalid

[1,1,1,1,100] will all be invalid
---
Return the number of valid splits in nums.

 

Example 1:

Input: nums = [10,4,-8,7]
Output: 2
Explanation: 
There are three ways of splitting nums into two non-empty parts:
- Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 >= 3, i = 0 is a valid split.
- Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 >= -1, i = 1 is a valid split.
- Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 < 7, i = 2 is not a valid split.
Thus, the number of valid splits in nums is 2.
Example 2:

Input: nums = [2,3,1,0]
Output: 2
Explanation: 
There are two valid splits in nums:
- Split nums at index 1. Then, the first part is [2,3], and its sum is 5. The second part is [1,0], and its sum is 1. Since 5 >= 1, i = 1 is a valid split. 
- Split nums at index 2. Then, the first part is [2,3,1], and its sum is 6. The second part is [0], and its sum is 0. Since 6 >= 0, i = 2 is a valid split.
  


 */