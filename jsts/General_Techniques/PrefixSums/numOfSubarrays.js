function numOfSubarrays(arr) {
    const MOD = 1_000_000_007;

    let prefix = 0;      // running prefix sum
    let countEven = 1;
    let countOdd = 0;   
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i];

        if ((prefix % 2) !== 0) { 
            ans = (ans + countEven) % MOD;
            countOdd++;
        }
        else {
            ans = (ans+countOdd)% MOD;
            countEven++;
        }
    }

    return ans;
}

console.log(numOfSubarrays([1,3,4,5]));