const subarraySum = (nums: number[], k: number): number => {
    let result: number = 0;
    let sum: number = 0;
    let map:Map<number, number> = new Map<number, number>();
    map.set(sum, 1);
    nums.forEach((val: number, idx: number)=> {
        sum += val; // standard prefix sum
        let target: number = sum - k;

        if (map.has(target)) {
            result += (map.get(target)??0); // update the result by adding the number of pairs we found earlier
        }

        // we should increment the sum regardless, because we want all possible values.
        map.set(sum, (map.get(sum)??0) + 1);
    })

    return result;
}

let nums = [1,1,1, 2,1, 1,3];
let k = 3

console.log(subarraySum(nums, k));