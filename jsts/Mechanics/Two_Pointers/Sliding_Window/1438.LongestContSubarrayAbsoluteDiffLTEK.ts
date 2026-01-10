const longestSubarray = (nums: number[], limit: number): number => {
    let result: number = 0;
    let [l, r]: [number, number] = [0, 0];
    let [max, min]: [number[], number[]] = [[], []];
    let absDiff = 0;

    outer_while:
    while (r < nums.length) {
        if (isNaN(max[max.length-1]) || nums[max[max.length-1]] <= nums[r]) {
            max.push(r);
        }

        if (isNaN(min[min.length-1]) || nums[min[min.length-1]] > nums[l]) {
            min.push(l);
        }
       

        absDiff = Math.abs(nums[max[max.length-1]] - nums[min[min.length-1]]);
        
        inner_while:
        while (absDiff > limit) {
            l++;
                 

            if (isNaN(max[max.length-1]) || nums[max[max.length-1]] <= nums[l]) {
                max.push(l);
            }

            if (isNaN(min[min.length-1]) || nums[min[min.length-1]] > nums[l]) {
                min.push(l);
            }
            
            absDiff = Math.abs(nums[max[max.length-1]] - nums[min[min.length-1]]);
            console.log(max, min, absDiff);
            
            break outer_while;   
        }
        console.log(max, min, absDiff);
        

        

        result = Math.max(result, r-l+1);
        
        r++;
    }


    return result;
};

let tstNums = [8,2,4,7]; let tstLimit = 4;

console.log(longestSubarray(tstNums, tstLimit));

/*
tstNums = [10,1,2,4,7,2]; tstLimit = 5;

console.log(longestSubarray(tstNums, tstLimit));


tstNums = [4,2,2,2,4,4,2,2]; tstLimit = 0;
console.log(longestSubarray(tstNums, tstLimit));
*/