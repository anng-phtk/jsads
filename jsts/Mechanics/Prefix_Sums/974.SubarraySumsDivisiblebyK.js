function numOfSubarrays(arr, k) {
    const MOD = 1_000_000_007;

    let ans = 0;
    let sum = 0;      // running prefix sum
    let buckets = new Array(k).fill(0);

    buckets[0] = 1; // whenever we can fully divide by k, remainder is 0. since 1st prefix sum is 0, we have seen it, and therefore we set it to 1

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        let bucketIdx = Math.abs(sum % k);

        console.log("nan", bucketIdx);
        ans = ans + buckets[bucketIdx];
        buckets[bucketIdx]++;
    }

    return ans;
}

console.log(numOfSubarrays([-2], 6));