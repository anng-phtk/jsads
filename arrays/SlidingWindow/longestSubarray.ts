/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = (nums:number[]):number => {
    let answer:number = 0;
    let [left, right]:[number, number] = [0,0];
    let counter = 1;

    while (right < nums.length) {
        if (nums[right] === 0) counter--;

        if (counter < 0) {
            if (nums[left] === 0) {
                counter++;
            }
            left++;
        }

        right++;
        answer = Math.max(answer, right-left);
    }
    return answer-1;
};