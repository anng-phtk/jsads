/**
 * function to find 2 numbers in an array that add up to a target nd get their indexes in the array 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} are the indices at which two complements that add up to the target are found 
 */
const twoSum = (nums, target) => {
    let results = [];
    const complementsMap = new Map();
    
    // fill the complements map with 
    // k=complement=>values[index for the complement to target]
    for (let i=0; i<nums.length; i++) {
        // because we are told that we have exactly 1 solution, no if/esle condition is required here.
        complementsMap.set(nums[i], i);
        
    }
    // for target 9, map will look like 
    // 2 => idx0,
    // 7 => idx1
    
    
    for (let i=0; i<nums.length; i++) {
        const complement = target - nums[i];
        
        if (complementsMap.has(complement) && i != complementsMap.get(complement)) {
            results = [i, complementsMap.get(complement)];
            return results;
        } 
    }

    return results;
}