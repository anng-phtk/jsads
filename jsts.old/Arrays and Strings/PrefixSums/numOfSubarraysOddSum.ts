const numOfSubarrays = (arr: number[]): number => {
    const MOD = 1_000_000_007;

    let prefix = 0;      // running prefix sum
    let cntEven = 1;     // prefix[-1] = 0 (even)
    let cntOdd = 0;      // no odd prefix yet
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i];

        if ((prefix % 2) === 0) {      // even prefix
            // odd subarrays ending here = #previous odd prefixes
            ans = (ans + cntOdd) % MOD;
            cntEven++;
        } else {                       // odd prefix
            // odd subarrays ending here = #previous even prefixes
            ans = (ans + cntEven) % MOD;
            cntOdd++;
        }
    }

    return ans;
}

console.log(numOfSubarrays([1,3,4,5]));