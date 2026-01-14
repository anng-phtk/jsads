const longestSubarray = (nums: number[], limit: number): number => {
    let result: number = 0;
    let [l, r]: [number, number] = [0, 0];
    let [max, min]: [number[], number[]] = [new Array<number>(), new Array<number>()];
    let absDiff = 0;

    outer_while:
    while (r < nums.length) {
        while (nums[max[max.length-1]] < nums[r]) {
            max.pop();
        }
        max.push(r);
        
        while (nums[min[min.length-1]] > nums[r]) {
            min.pop();
        }

        min.push(r);
    
        absDiff = Math.abs(nums[max[0]] - nums[min[0]]);
       

        while (absDiff > limit) {
            if (max[0] === l) max.shift();
            if (min[0] === l) min.shift(); 
            
            l++;
            absDiff = Math.abs(nums[max[0]] - nums[min[0]]);
            
        }
        

        result = Math.max(result, r-l+1);
        
        r++;
    }


    return result;
};

let tstNums = [8,2,4,7]; let tstLimit = 4;

console.log(longestSubarray(tstNums, tstLimit));


tstNums = [10,1,2,4,7,2]; tstLimit = 5;
console.log(longestSubarray(tstNums, tstLimit));


tstNums = [1,5,6,7,8,10,6,5,6]; tstLimit = 4;
console.log(longestSubarray(tstNums, tstLimit));
