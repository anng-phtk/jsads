const maxSubArraySumEqK = (nums: number[], k: number): number => {
    let result: number = 0;
    let sum: number = 0; 
    let map: Map<number, number> = new Map<number, number>();

    // we see the 1st 0 at index of -1 which is out of left bound of the nums array
    // we init the map with that
    map.set(sum, -1);   
    nums.forEach((val:number, idx:number) => {
        sum += val; // previous    
        // we will find what number we are looking for that sums to k. 
        // if we conside sum to be prefixSum[r], then we are looking for prefixSum[l-1] that sums to "k"
        let target: number = sum - k; 

        if (map.has(target)) {
            let idxDiff: number = idx - (map.get(target)??0); // if map.get(target) returns a null then we can use a 0 
            result = Math.max(result, idxDiff);
        }
        // since we are looking for the widest distance between 2 pointers, we will add to the map only when we 1st encounter a target
        if (!map.has(sum)) {
            map.set(sum, idx);
        }
        
    });

    return result;
}


let nums = [2, 0, 1, 1];
let k = 1;

console.log(maxSubArraySumEqK(nums, k));