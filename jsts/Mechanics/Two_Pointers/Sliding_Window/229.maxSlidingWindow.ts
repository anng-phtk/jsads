function maxSlidingWindow(nums: number[], k: number): number[] {
    let maxDeq: number[] = [];
    let result: number[] = [];
    
    let [i,j]: [number, number] = [0, 0];
    
    for (; i < k; i++) {    
        while (nums[maxDeq[maxDeq.length-1]] < nums[i]) {
            maxDeq.pop();
        }
        maxDeq.push(i);        
    }
    result.push(nums[maxDeq[0]]);
    

    for (; i < nums.length; i++, j++) {
        if (j === maxDeq[0]) maxDeq.shift();
        

        console.log(nums[maxDeq[maxDeq.length-1]] , nums[i])    
        while (nums[maxDeq[maxDeq.length-1]] < nums[i]) {
            maxDeq.pop();
        }
        
        maxDeq.push(i);

        result.push(nums[maxDeq[0]]);
    }

    return result;
};

let tstNums = [1,-1]; 
let tstk = 1;
console.log(maxSlidingWindow(tstNums, tstk))

tstNums = [1,3,-1,-3,5,3,6,7];
tstk = 3;
console.log(maxSlidingWindow(tstNums, tstk))
