
// single loop solution
const findMaxAverage = (nums, k) => {
    let leading = 0;
    let trailing = 0 - k;

    let [runningSum, answer] = [0, 0];

    while (leading < nums.length) {
        console.log("trailing: ", trailing)

        if (trailing < 0) {
            runningSum += nums[leading];
            answer = runningSum;
        }
        else {
            // when we reach this point, leading pointer is greater than k in the array
            // idea is to remove the number in trailing from the running sum 
            //console.log(`before adding ${runningSum}`);
            runningSum += nums[leading] - nums[trailing];
            
        }

        answer = Math.max(answer, runningSum)
        console.log(answer, runningSum);

        
        leading++;
        trailing++;
    }

    console.log("returning ", answer/k);
    return answer/k;
}

let n = [-1]
findMaxAverage(n, 1);



// simpler, but requires 2 loops
const findMaxAverage_temp = (nums, k) => {
    let [answer, sum] = [0, 0]
    for (let i = 0; i < k; i++) {
        sum += nums[i];

    }

    answer = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        answer = Math.max(sum, answer);
    }


    return answer / k
}