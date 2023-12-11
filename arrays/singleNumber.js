/** 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * 
 * */

// todo: if we need to solve this without in time = o(n) and space = o(1) then we need to implement a bit manipulation solution
// for now lets solve using o(n) time and space
// we will store each number in a set as we iterate thru' the array
// when we find a dupe, we remove the number
// we are left with only 1 in the set 

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {

    let uniq = new Set();

    for (let num of nums) {
        if (!uniq.has(num)) {
            uniq.add(num);
        }
        else {
            uniq.delete(num);
        }
    }
    console.log("check: ", uniq);
    
    if (uniq.size > 1) return 0;

    return uniq.keys(0);

    for (const key of uniq.keys()) {
        return key
    }

};


console.log(singleNumber([1,2,1,2,4]))