/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
Intuition:
start at num[0]
move the lead pointer rightwards

if we encounter a zero, increment flipped by 1.
if flipped = k, then start moving the trailing pointer until it flipped is 0 again
every time trailing pointer encounters zero, decrement flipped


if flipped is eq k when we encounter another 0, then

*/
var longestOnes = function (nums, k) {
    if (k >= nums.length)
        return k;
    var answer = 0;
    var _a = [0, 0], left = _a[0], right = _a[1];
    var flipped = k;
    while (right < nums.length) {
        if (nums[right] === 0)
            flipped--;
        if (flipped < 0) {
            if (nums[left] === 0)
                flipped++;
            left++;
        }
        right++;
        answer = Math.max(right - left, answer);
    }
    return answer;
};
var nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
var k = 2;
//console.log(longestOnes(nums, k))
nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
k = 3;
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(longestOnes(nums, k));
