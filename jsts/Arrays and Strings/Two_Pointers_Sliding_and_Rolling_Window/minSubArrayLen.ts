const minSubArrayLen = (target: number, nums: number[]): number => {
    let result: number = Infinity;
    let left: number = 0;
    let sum: number = 0;

    // define the pointer that keeps moving rightward and summing
    // this would be O(n) moves
    for (let right: number = 0; right < nums.length; right++) {
        sum += nums[right];

        // if sum becomes larger than target, we need to reduce the window from the left
        // worst case, would occur when we do not have a target sum until 2nd last and last element only
        // if that is the case then this could end up being O(n-1)
        // think of target = 7 and nums = [1,1,1,1,1,6] when "r" = 5, "l" will start. It will need to subtract until "l" = 4  
        while (sum >= target){
            
            let temp: number = right-left+1;
            result = Math.min(result, temp);


            sum -= nums[left]; //reduce the sum and move left pointer rightwards
            left++; 
        }

    }

    if (result === Infinity) return 0;
    // verify if the worst case would be near O(n^2)
    return result;
};