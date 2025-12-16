const checkSubarraySum = (nums: number[], k: number): boolean => {

    if (nums.length < 2) return false; 
    let result: boolean = false;
    let prefixSums: number[] = new Array<number>();
    let sum: number = 0;
    let map: Map<number, number> = new Map<number, number>();

    map.set(0,-1);

    for (let idx:number = 0; idx < nums.length; idx++) {
        sum += nums[idx]; // prefix Sums
        prefixSums[idx] = sum;
        let remainder: number = (k === 0)? sum : sum % k
        if (map.has(remainder)) {
            let idxDiff: number = idx - map.get(remainder)!;
            let prevIdx: number = map.get(remainder)!;

            if (idxDiff >=2 ) {
                result = true;
                break
            }
        }
        
        if (!map.has(remainder)) map.set(remainder, idx)
    }

    
    console.log(map, "\n", prefixSums)
    return result;
}


console.log(checkSubarraySum([5,0,0,0], 3))