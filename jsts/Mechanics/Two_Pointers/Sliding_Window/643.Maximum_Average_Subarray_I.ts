const findMaxAverage = (nums: number[], k: number): number => {
    let [left, right]:[number,number] = [0, k];

    let sum:number = 0;
    let result:number = 0;
    // lets get a sum of the 1st k numbers
    // time is O(n)
    for (let i: number = 0; i < k; i++) {
        result += nums[i];
    }
    // at this point we can see the sum of the 1st k numbers
    sum = result;
    
    // now we can proceed to add index k+1, k+2, k+3,...n and subtract index 0, k-1, k-2, ... k-(n-k) 
    while (right < nums.length) {
        
        sum += nums[right];
        sum -= nums[left];

        // advance the fixed window
        right++;
        left++;

        result = Math.max(sum, result);
    }

    return (result/k)
};