const minStartValue = (nums: number[]): number => {
    // set an initial value
    let result: number = 1;
    let len: number = nums.length;
    let sum: number = 0;
    for (let i: number = 0; i < len; i++) {
        sum += nums[i];

        let startVal: number = 1 - sum;
        result = Math.max(result, startVal);
    }

    return result;

};

/**
 
Given an array of integers nums, you start with an initial positive value startValue.
In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
Return the minimum positive value of startValue such that the step by step sum is never less than 1.

My understanding of this problem itself: 
startValue can be any value. It need not be from the array nums. 
I have to choose a startValue such that a sum of a value at any index i of an array + my chosen startValue > = 1

Lets set a variable result = 1; e.g. [-4,-3,-2, 1] will resolve to [-4, -7,-9,-8] -4 +x = 1, so x = 5. set result = max(result, x) for -7, x = 8, for -9, x = 10 so max(result, x) will resolve to 10. Checking manually, if we use 10 on the original array we get 10-4, 6-3, 3 -2, 1+1 which satisfies our condition. Checking with 9 we break our requirement -> 9-4 = 5, 5 -3 = 2. 2-2 =0 (3rd iteration) e.g. [1,2,3] resolves to [1,3,6] 1+x = 1 so x = 0, set result = max(result, x) = 1 for 3, x = -2, result = max(result, x) = 1 for 6, x = -5, result = max(result, x) = 1 so keep result = 1. ---- Now I think this answer is more precise.
 
 */