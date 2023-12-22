/**
 * @param {number[]} nums
 * @return {boolean}
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */

const increasingTriplet = nums => {

    let answer = false;
    
    if (!testBogusUseCase(nums)) return false;

    let j = 1;
    let halfN = Math.floor(nums.length / 2);
    
    outerWhile:
    while (j < nums.length - 2) {
        if (j <= halfN) {
            // 1st evaluate left of j
            leftLoop:
            for (let n = j - 1; n >= 0; n--) {
                leftEval = (nums[n] < nums[j]);     // if we are asked to return a valid triplet, the datatype can be changed from bool to int
                if (leftEval) break leftLoop;
            }


            // we can make an assumption that if there is no number smaller than j in the left side of j, there is no point in looking for a triplet anymore
            // thus ignore the rest of the loop and iterate again starting with while
            if (!leftEval) continue outerWhile;

            rightLoop:
            for (let n = j + 1; n < nums.length; n++) {
                rightEval = (nums[j] < nums[n]);
                // we found a valid number, so no point in looking further
                if (rightEval) break rightLoop;
            }
        }
        else {
            // in the 2nd half of a big array 
            // 1st right side left of j
            rightLoop:
            for (let n = j + 1; n < nums.length; n++) {
                rightEval = (nums[j] < nums[n]);
                if (rightEval) break rightLoop;
            }

            // we can make an assumption that if there is no number smaller than j in the left side of j, there is no point in looking for a triplet anymore
            // thus ignore the rest of the loop and iterate again starting with while
            if (!rightEval) continue outerWhile;

            leftLoop:
            for (let n = j - 1; n >= 0; n--) {
                leftEval = (nums[n] < nums[j]);     // if we are asked to return a valid triplet, the datatype can be changed from bool to int
                if (leftEval) break leftLoop;
            }
        }

        if (leftEval && rightEval) {
            answer = true;
            break outerWhile;
        }
        else {
            j++;
        }

    }



    return answer;
}

const testBogusUseCase = nums => {
    let testingMap = new Map();

    for (let idx in nums) {
        if (testingMap.has(nums[idx])) {
            testingMap.set(nums[idx], testingMap.get(nums[idx]).push(idx));
        }
        else {
            testingMap.set(nums[idx], [idx]);
        }
    }

    
    // this will take care of leet code's bogus arrays of [all 1s] or [all 1,2,1,2,...]
    return (testingMap.size > 2); // valid triplet
}

let m = increasingTriplet([1,2,3,4,5]);

console.log(m);