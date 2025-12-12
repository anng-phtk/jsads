const pivotIndex = (nums: number[]): number => {

    // start with the assumption that we will not find an index
    let result: number = -1;

    // calculate the prefix sum upfront    

    let arrSum: number = 0;
    for (let i of nums) arrSum += i; 
    /** 
    nums.reduce((prevVal:number, currVal:number, idx:number):number => {
        return prevVal+currVal
    });
    */
    let [prefixSum, suffixSum]:[number, number] = [arrSum, 0];
    
    for (let j:number = nums.length-1; j >= 0; j--) {
        // start with a prefix sum by itself
        // this is because at the last index suffixsum is 0, and prefix sum is full array sum 
        prefixSum -= (nums[j+1]??0); 
        // suffix sum is normal
        suffixSum += nums[j];   // 

        // at the point where prefix sum and suffix sum is same, thats where the pivot index is
        // if no such index is found, we will automatically return -1
        if (prefixSum === suffixSum) {
            // since we are coming back from right, we can safely overwrite the value of result
            result = j;
        }
    }   

    return result;
};
let nums =  [2,1,-1];// [1,7,3,6,5,6] // [1,2,3]// [2,1,-1];
console.log(pivotIndex(nums));
/* **
Problem Statement:  

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

---

Requirement: The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

Understanding:
1. sum of all values to the left of a "pivot" i is equal to sum of all values to the right of pivot i.
2. Given an array [0,1,2,...,i-1, i, i+1, ..., i+n], then find the index of "i" such that   sum(0 : i-1) = sum (i+1: i+n)


2nd Requirement: If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Understanding:
If pivot index "i" is at 0th index, then the sum on left side is 0. 
Inversely if i in on the (nums.length-1)th position, then sum on rightside is 0.

This is not saying that the arrays become invalid for this. No. Instead see this example that LC provides (below). This tells us the pivot is i=0, nums[i]=2 (at index 0), because left of that index is 0, and right of that index everything sums to0
nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0. Left sum = 0 (no elements to the left of index 0). Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

3rd Requirement: Return the leftmost pivot index. 
the ask here is to provide the 1st index that we find from the left. 

4th requirement: If no such index exists, return -1.
return -1 if no valid index is present.


What this question is not:
1. not asking for longest subarray
2. not asking for longest anything 
3. not asking for modulo or multiples, subtractions, products

*/