let nums: number[] = [-2,0,3,-5,2,1];
let prefix: number[] = [];

prefix[0] = nums[0];
for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i] + prefix[i-1]
}