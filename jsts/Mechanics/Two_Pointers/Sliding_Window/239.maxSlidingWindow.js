const maxSlidingWindow = (nums, k) => {
    let maxDq = [];
    let [l, r] = [0, 0];

    let result = [];

    // change to for loop for auto increment
    while (r < nums.length) {

        while (maxDq.length > 0 &&  nums[r] > nums[maxDq[maxDq.length - 1]]) {
            maxDq.pop();
        }
        maxDq.push(r);
        
        if (r >= k-1) {
            // only add when window is established
            result.push(nums[maxDq[0]]);
            // only move l after the window is reached
            // when l actually moves, then make sure to pop the element off the top of q so next window is clean
            if (l === maxDq[0]) maxDq.shift();
            l++
        }
        
        
        r++;
        
    }




    return result;
}

let tstNums = [1, -1];
let tstk = 1;
console.log(maxSlidingWindow(tstNums, tstk))

tstNums = [1, 3, -1, -3, 5, 3, 6, 7];
tstk = 3;
console.log(maxSlidingWindow(tstNums, tstk))
