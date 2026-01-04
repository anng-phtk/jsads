const numberOfSubarrays = (nums: number[], k: number): number => {
    let result: number = 0;

    result = atMostKOdd(nums, k) - atMostKOdd(nums, k-1);
    return result;
};

const atMostKOdd = (nums: number[], k: number): number => {
    let oddSeenCount: number = 0;
    let [l,r]: [number, number] = [0,0]; 
    let count: number = 0;

    while (r < nums.length) {
        if (nums[r] % 2 !== 0) {
            // odd number
            oddSeenCount++;
        }

        while (oddSeenCount > k) {
            if (nums[l] % 2 !== 0) {
                oddSeenCount--;
            }
            l++;
        }

        let ptrDistance: number = r - l + 1;
        count += ptrDistance;
        r++;
    }

    return count;
};