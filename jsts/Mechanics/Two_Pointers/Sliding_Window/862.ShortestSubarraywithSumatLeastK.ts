/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const shortestSubarray = (nums: number[], k:number) => {
    let result: number = Number.POSITIVE_INFINITY;
    let prefixSums: number[] = [0];

    // here we need an ascending deq to sort prefix sums
    let ascDQ: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        prefixSums.push((prefixSums[i])+nums[i]);
    }

    let [l, r]: [number, number] = [0, 0];
    while (r < prefixSums.length) {
        while (ascDQ.length > 0 && prefixSums[r] - prefixSums[ascDQ[0]] >= k) {
            // prefixSums[r]  - prefixSums[ascDQ[0]]
            // (current sum) - the lowest sum at the front of the dq is GTE k, then we have a pair of r, l whose subarray sum is GTE k
            result = Math.min(result, r - ascDQ[0]);

            // remove from the front
            ascDQ.shift();
        }

        // is the prefix sum that came before "r" larger than the one at "r"/
        // if yes, we need to get rid of that.
        // I am smaller and newer - so I will dominate, fire the bigger and older guy that went into the queue before me.   
        while (ascDQ.length > 0 && prefixSums[r] <= prefixSums[ascDQ[ascDQ.length-1]] ) {
            ascDQ.pop();
        }
        ascDQ.push(r);

        r++;
    }
    
    console.log(prefixSums, ascDQ);

    return (result === Number.POSITIVE_INFINITY)? -1: result;
};

console.log(shortestSubarray([1,2,-1, 3,1, -2, 2, 2], 4));
