/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    var answer = 0;
    var _a = [0, 0], left = _a[0], right = _a[1];
    var counter = 1;
    while (right < nums.length) {
        if (nums[right] === 0)
            counter--;
        if (counter < 0) {
            if (nums[left] === 0) {
                counter++;
            }
            left++;
        }
        right++;
        answer = Math.max(answer, right - left);
    }
    return answer - 1;
};
