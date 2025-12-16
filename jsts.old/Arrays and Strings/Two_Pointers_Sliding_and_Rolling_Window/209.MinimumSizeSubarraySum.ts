const minSubArrayLen = (target: number, nums: number[]): number => {
    // our array has positive numbers, so we can likely start with a zero. 
    // otherwise we can start with Number.POSITIVE_INFINITY
    let ans: number = Number.POSITIVE_INFINITY; 

    // tracks the sum
    let sum: number = 0;

    // track the start point;
    let leftPtr: number = 0; 

    //for (let i: number = 0; i < nums.length; i++) {
    let rightPtr: number = 0
    while (rightPtr < nums.length) {
        sum += nums[rightPtr];

        while (sum > target) {
            sum -= nums[leftPtr];
            ans = Math.min(ans, rightPtr-(leftPtr-1));
            leftPtr++;
        }

        //console.log(sum);

        rightPtr++;

    }
    


    return (ans === Infinity)?0:ans;
}

// test cases:
let tstTarget:number = 7; 
let tstNums:number[] = [2,3,1,2,4,3];
let tstResult = 2;
console.log(minSubArrayLen(tstTarget, tstNums));