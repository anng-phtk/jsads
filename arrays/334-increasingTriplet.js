/**
 * @param {number[]} nums
 * @return {boolean}
 */

const evalLeftArray = (leftNums) => {

}

const increasingTriplets = (nums) => {
    let [answer, leftEval, rightEval] = [false,false,false];

    let [i,j,l] = [0,1,2]; // indexes for which we will compare these values 
    
    outerWhile:
    while(j <= nums.length-2) {

        // 1st evaluate left of j
        leftLoop:
        for (let n=j-1; n>=0;n--) {
            leftEval = (nums[n] < nums[j]);
            if (leftEval) break; 
        }

        // now evalutate all numbers to the right of j
        rightLoop:
        for (let n=j+1; n< nums.length; n++) {
            rightEval = (nums[j] < nums[n]);

            if (rightEval) break rightLoop;
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


/**
Analysis
========

set small and large numbers to infinity
setup an array triplets = [];

also add a var smallIdx and set to -1;

for loop
    loop where i = 0:
        if: (nums[i ie 0] ie 20) <= (small ie infinte)) ie true //for 1st loop is always going to true
            set small = nums[i ie 0]
            set (smallIdx = i) ie 0 

    end     
    loop where i = 1
        if: (nums[i@1] ie 100) <= small ie 20) ie false

        else if: (nums[i@1] ie 100) <= large ie inifinite) ie true [or] (smallIdx =-1) ie false // we set the smallIdx in previos iteration
            large = nums[i@1] ie 100
    end
    loop where i = 2
        if: (nums[i@2] ie 10) <= small ie 20) ie true
            set small = nums[i@2] ie 10 
            set smallIdx = i ie 2
    end
current variable state is:
    smallIdx = 2
    small = 10
    large = 100

    loop where i = 3
        if: (nums[i@3] ie 12) <= small ie 10) ie false
        else if: (nums[i@3] ie 12) <= large ie 100) ie true [or (smallIdx ie 2 = -1) ie false] // go into else if
            large = nums[i@3] ie 12
    end

    current variable state is:
    smallIdx = 2
    small = 10
    large = 12

    loop where i =4
        if: (nums[i@4] ie 5) <= small ie 10) ie true
            set small = nums[i@4] ie 5 
            smallidx = 4 // update the index
    end

current variable state is:
    smallIdx = 4
    small = 5
    large = 12

    loop where i=5
        if: (nums[i@5] ie 13) <= small ie 5) ie false
        else if: (nums[i@5] ie 13) <= large ie 12) ie false [or (smallIdx ie 4 = -1) ie false] // next clause
        else:
            triplets = [smallidx ie 4, i ie 5, nums.indexOf(large ie 12) ie 3];
            thus
            triplets value comes out to [4,5,]

    
 */

            const findIncreasingTriplet = (nums) => {
                let small = Infinity;
                let large = Infinity;
                let smallIdx = -1;
                let tripletIndices = [];
            
                for (let i = 0; i < nums.length; i++) {
                    if (nums[i] <= small) {
                        small = nums[i];
                        smallIdx = i;
                    } else if (nums[i] <= large || smallIdx === -1) {
                        large = nums[i];
                    } else {
                        tripletIndices = [smallIdx, i, findLastIndex(nums, large, smallIdx, i)];
                        return tripletIndices;
                    }
                }
            
                return tripletIndices; // Empty array if no triplet found
            };
            
            const findLastIndex = (nums, target, start, end) => {
                for (let i = end; i >= start; i--) {
                    if (nums[i] === target) {
                        return i;
                    }
                }
                return -1; // Not found
            };
            
            // Example usage:
            const nums = [20, 100, 10, 12, 5, 13];
            console.log(findIncreasingTriplet(nums)); // Output: [2, 4, 5]





findIncreasingTriplet([20, 100, 10, 12, 5, 13]);

findIncreasingTriplet([4, 3, 2, 1]);


var increasingTriplet2 = function (nums) {
    let slowPtr = 0;
    let fastPtr = 1;
    let answer = new Set();
    for (let i = 0; i < nums.length; i++) {

        console.log(slowPtr, fastPtr);

        if (!answer.size && !(nums[slowPtr] < nums[fastPtr])) {
            slowPtr++;
            fastPtr++;
        }
        else if (nums[slowPtr] < nums[fastPtr]) {
            answer.add(slowPtr);
            answer.add(fastPtr);
            slowPtr++;
            fastPtr++;
        }
        else if (answer.size && !(nums[slowPtr] < nums[fastPtr])) {
            fastPtr++;
        }




        if (answer.size === 3) {
            break;
        }
    }
    console.log(answer);

    return (answer.size === 3);
};

//increasingTriplet([1,2,3,4,5]);
//increasingTriplet([5,4,3,2,1]);
