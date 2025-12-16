
const twoSumMap = (nums, target) => {
    const complements = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (complements.has(nums[i])) {
            result.push(complements.get(nums[i]));
            result.push(i);
        }

        complements.set(complement, i);
    }

    return result;
}

let testNums = [2,7,4,5,3,1]; let testTarget = 9;

console.log(twoSum(testNums, testTarget));