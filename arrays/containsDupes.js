/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    let dupes = new Set(); // we can use a set also
    
    for (let i=0;i<nums.length; i++) {
        if (dupes.has(nums[i])) {
            return true;
        }
        
        dupes.add(nums[i]);
    }
    
    return false;
};