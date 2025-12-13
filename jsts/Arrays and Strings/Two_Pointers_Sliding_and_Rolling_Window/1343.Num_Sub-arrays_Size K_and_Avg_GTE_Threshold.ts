const numOfSubarrays = (arr: number[], k: number, threshold: number): number => {
    let sum: number = 0    
    let ans: number = 0;

    
    
    for (let i: number = 0 ; i < k; i++) {
        sum += arr[i];
    }
    // make sure to increment count if the 1st array avg is gte threshold
    ans += ((sum/k) >= threshold) ? 1 : 0;

    for (let i: number = 0; i < arr.length; i++) {
        sum += arr[i];
        sum -= arr[i-k];

        // i and j increment automatically

        // increment count if the 1st array avg is gte threshold
        ans += ((sum/k) >= threshold) ? 1 : 0;    
    }

    
    return ans;

};