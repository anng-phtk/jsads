const AtMost = (nums: number[], k: number): number => {
    let result = 0;
    let distinctInts:Map<number, number> = new Map<number, number>();
    let [l,r]:[number, number] = [0,0];
    let distinctSeen:number = 0;
    
    while (r < nums.length) {
        distinctInts.set(nums[r], (distinctInts.get(nums[r])??0)+1);

        if (distinctInts.get(nums[r]) === 1) distinctSeen++;
    
        while(distinctSeen > k) {
            distinctInts.set(nums[l], (distinctInts.get(nums[l])??0)-1);
            if (distinctInts.get(nums[l]) === 0) distinctSeen--;

            l++;
        }

        let pointerDistance: number = (r - l + 1);
        result += pointerDistance;
    
        r++;
    }
    
    
    return result;
};

const subarraysWithKDistinct = (nums: number[], k: number): number => {
    if (k <= 1 || k > nums.length) return 0;

    return AtMost(nums, k)-AtMost(nums, k-1);
}

subarraysWithKDistinct([1,2,1,3,4], 3)