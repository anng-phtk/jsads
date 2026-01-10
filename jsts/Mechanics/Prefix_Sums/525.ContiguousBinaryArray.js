/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let sum = 0;
    
    let seenMap = new Map();
    seenMap.set(sum, -1); // since we start with sum = 0, we should store it. Becuase its a 0, we should set it to -1

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += (nums[i] === 0) ? -1 : 1;
        
        if (seenMap.has(sum)) {    
            result = Math.max(i-seenMap.get(sum), result);
        }
        
        seenMap.set(sum, i)

        
    }


    return result;
};

console.log(findMaxLength([0,1,1,1,1,1,1,1,0,0,0]));
console.log(findMaxLength([0,1]));