/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    // 1. Create result array
    let result = new Array(nums.length);
    // 2. Run your "Left" logic filling result
    let strictLeftPrefixPrd = 1;
    for (let i = 0; i < result.length; i++) {
        result[i] = strictLeftPrefixPrd;
        strictLeftPrefixPrd *= nums[i];
    }
    console.log("result: ", result);
    // 3. Run your "Right" logic updating result (multiplying by R)
    let r = 1;
    for (let j = nums.length-1; j >= 0; j--) {
        console.log("result[j]: ", result[j], r);
        result[j] = result[j] * r;
        

        r *= nums[j] ;
    }
    // 4. Return result
    return result;
};

console.log(productExceptSelf([1,2,3,4]));