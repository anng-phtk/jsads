
// O(n) solution
// there is O(n) + o(k log k) solution
function topKFrequent(nums: number[], k: number): number[] {
    let freqMap:Map<number, number> = new Map<number, number>(); 
    let bucket: Array<number[]> = Array.from({length:nums.length+1}); // need to understand this syntax a bit more
    let result: Array<number> = new Array<number>();

    for (let i: number = 0; i < nums.length; i++) {
        freqMap.set(nums[i], (freqMap.get(nums[i])|| 0) +1);
    }   

    for (let [k,v] of freqMap) {
        if (!bucket[v]) bucket[v]= new Array();
        bucket[v].push(k);
    }

    
    outer_loop:
    for (let j: number = bucket.length; j >= 1; j--) {
        if (!bucket[j]) continue;
        inner_loop:
        for (let item of bucket[j]) {
            result.push(item);
    
            if (result.length === k) return result; 
            //break outer_loop;
        }

    } 
    return result;
}