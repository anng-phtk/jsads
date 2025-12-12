let nums = [0,0,1,1,1,1,2,2,3]; // [0,0,1,1,1,1,2,2,2,4]; // [1,1,1]; // [0,0,1,1,1,1,2,3,3] // 

const removeDuplicates = (nums: number[]): number => {
    let l: number = 0;
    let k: number = 2;
    let len: number = nums.length;

     // need to develop a good intution for this.
    for (let r: number = 0; r < len; r++) {
        if (l < k || nums[r] !== nums[l-k]) {
            nums[l] = nums[r];
            l++;
        } 
    }

    return l+1;
};

let retval = removeDuplicates(nums);
console.log(nums, retval);