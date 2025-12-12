let nums = [1,2,3,4];

let l = 1;
console.log(nums);
for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    nums[i] = l;
    l *= temp; 
}
console.log(nums);


let nums2 = [1,2,3,4];
let r = 1;
console.log(nums2);
for (let j = nums2.length-1; j >= 0; j--) {
    let temp = nums2[j]
    nums2[j] = r;
    r *= temp;
}

console.log(nums2);