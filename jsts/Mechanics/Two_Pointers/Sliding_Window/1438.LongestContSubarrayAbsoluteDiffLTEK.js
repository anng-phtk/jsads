// this is not useful

const longestSubarray = (nums, k) => {
    let result = 0;
    let [l,r] = [0,0];
    let winMinMaxQ = [];

    while (r < nums.length) {

        winMinMaxQ.push(nums[r]);

        // sort the queue;
        winMinMaxQ.sort((a,b) => a-b);

        // start shrinking window when diff between the sorted queue's ends exceeds k  
        while (winMinMaxQ[winMinMaxQ.length-1]-winMinMaxQ[0] > k) {
            if (winMinMaxQ[0] === nums[l]) winMinMaxQ.shift();
            // sort the queue;
            winMinMaxQ.sort((a,b) => a-b);
            l++
        }

        result = Math.max(result, r-l+1);
        r++;
    }

    return result
};

let tstNums = [8,2,4,7]; let tstLimit = 4;

console.log(longestSubarray(tstNums, tstLimit));


tstNums = [10,1,2,4,7,2]; tstLimit = 5;
console.log(longestSubarray(tstNums, tstLimit));


tstNums = [1,5,6,7,8,10,6,5,6]; tstLimit = 4;
console.log(longestSubarray(tstNums, tstLimit));
