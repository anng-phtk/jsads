const subarraySum = (nums: number[], k: number): number => {
    let result:number = 0;
    const map:Map<number, number> = new Map<number, number>();
    map.set(0,1);

    let sum: number = 0;
    let count: number = 0;
    // loop over each item of nums
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i]
        let need: number = sum - k;

        if (map.has(need)) {
            count += map.get(need)!;
            console.log(sum, need, count)
        }

        map.set(sum, (map.get(sum)??0)+1);
        
        
    }

    console.log(map);
    return count;
};

let nums = [-1,1,0]; let k=0;

console.log(subarraySum(nums,k))