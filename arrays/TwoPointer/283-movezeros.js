/**
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

/**
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


/**
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// most optimal solution
const moveZeroes = nums => {
    if (nums.length <= 1) return;

    // this was the key. begin the read pointer ahead of the write pointer.
    // if the pointers are in the same poistion at the start this will not work
    let [reader, writer] = [1,0];

    while (reader < nums.length) {
        if (nums[writer] !==0 ){ 
            writer++;
        }

        if (nums[writer] === 0) {
            nums[writer] = nums[reader];
            nums[reader] = 0;
        }

        reader++;
    }  
}


const moveZeroes_Space_oN = nums => {
    // declare anothe auxilary array as temporaty placeholder
    let temp = [];

    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            temp.push(nums[i]);
            nums[i] = 0;
        }
    }

    for (let i=0; i< temp.length; i++) {
        nums[i] = temp[i];
    }
}

const moveZeroes = nums => {
    let [reader, writer] = [0,0];

    while (reader < nums.length) {
        if (nums[writer] !==0 ){ 
            writer++;
        }

        if (nums[reader] !== 0) {
            doSwap(nums, writer, reader);
        }

        reader++;
    }
    
}

const moveZeroes_o_ofn_space = nums => {
    // declare anothe auxilary array as temporaty placeholder
    let temp = [];

    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            temp.push(nums[i]);
            nums[i] = 0;
        }
    }

    for (let i=0; i< temp.length; i++) {
        nums[i] = temp[i];
    }
}


// o(n^2) solition
var moveZeroes_oofn2 = function(nums) {
    let ptr = 0;

    // loop thru' the array
    for (let i=0; i<nums.length; i++) {
        // if there is a zero at this index, we need to swap it
        if (nums[i] === 0) {
            // lets find how many consequent zeros are ther?
            ptr = i;
            while (nums[ptr] === 0) {
                // if rest of the array is all zeros, we are good, exit the entire function
                if (ptr >= nums.length-1) return; // we are done

                // if we are still seeking consequent zeros
                ptr++;
            }

            doSwap(nums, i, ptr);
        }
    }

    console.log(`after swap: ${nums}`);

};

function doSwap(arr, idx1, idx2) {
    console.log(`doSwap: ${idx1}, ${idx2}`)
    let temp = arr[idx1];
    arr[idx1]= arr[idx2];
    arr[idx2]= temp;
    console.log(`after swap: ${arr}`);
}

let test1=[0,1,0,3,12];
moveZeroes(test1);

//let test2=[0,1,0,0,3,12];
//moveZeroes(test2);