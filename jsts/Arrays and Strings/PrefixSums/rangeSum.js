let nums = [1,2,3,4,5];

let l = 0;
console.log(nums);
for (let i = 0; i < nums.length; i++) {
    temp = nums[i];
    nums[i] = l;
    l += temp; 
}
console.log(nums);

let [left,right] = [1,3];
let rangeSum = nums[right+1] - nums[left];
console.log(rangeSum);


let nums2 = [1,2,3,4,5];
let r = 0;
console.log(nums2);
for (let j = nums2.length-1; j >= 0; j--) {
    nums2[j] += r;
    r = nums2[j];
}

console.log(nums2);