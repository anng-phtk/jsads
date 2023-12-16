/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {

    // outer loop to take each number 
    // each number has 2 divisors by default (1 and itself).
    // inner loop from 2 to itelf-1 and find which numbers divide completely
        // initialize countOfDivisors =2 and a sumOfDivisors=1+number itelf
        // add 1 to countOfDivisors each time we find a divisor
        // add the divisors to sunOfDivisors
        // if we find count of divisors to be greater than 4 break inner loop

    // if we eval countOfDivisors to be 4, add the sumOfDivisors to an answer 
    
    

    let answer = 0;

    outer_loop:
    for (let i=0; i<nums.length; i++) {
        let [countOfDivisors, sumOfDivisors] = [2, 1+nums[i]];

        inner_loop:
        for (let j=2; j<Math.sqrt(nums[i]); j++) {
            
            if (nums[i] % j === 0) {
                
                countOfDivisors += ((j*j) === nums[i])? 1: 2;
                sumOfDivisors += j + (nums[i]/j);
            }
            if (countOfDivisors > 4) break inner_loop;
        } 

        

        if (countOfDivisors === 4) answer+=sumOfDivisors;

        //reset
        sumOfDivisors = 0;
    }

    return answer;

};

sumFourDivisors([21, 7, 4]); //32


sumFourDivisors([21, 21]); //64


sumFourDivisors([1, 7, 4]); // 0