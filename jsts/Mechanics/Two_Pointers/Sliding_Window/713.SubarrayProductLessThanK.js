/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let [l,r] = [0,0];
    let result = 0;
    let product = 1;
    while (r < nums.length) {
        product *= nums[r];

        // pay attention to strictly less than K condition here
        // product must be >= (not just >) k 
        while (product >= k) {
            //contraints state we have only +ve numbers: 1 <= nums[i] <= 1000
            // this should be safe
            product = product/nums[l];
            l++;
        }
        

        // count how many windows are possible for each window ending in r
        result += r-l+1;
        
        r++;
    }


    return result;
}

console.log(numSubarrayProductLessThanK([10,5,2,6], 100))