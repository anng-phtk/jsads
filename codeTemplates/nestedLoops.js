// 
// I expect these will help us setup our solution without an error in the basics


/**
 * this is a nested loops code template from collection of all basic algo templates, I expect these will help us setup our solution without an error in the basics
 * 
 * @param {Number[]} arr 
 * @returns 
 */

const nestedLoopExample = arr => {

    for (let i=0; i<arr.length; i++) {
        // do something here like setup counters

        // make sure to set j=i+1 if we do not want to repeat combinations like find pairs that we have already found.
        for (let j=i+1; j<arr.length; j++) {
            // do something here like comparisons
            // if (condition) {} like an example condition
            
            if (arr[i] <= arr[j]) {
                // do something like increment/decrement counter for find Math.max/mins
            }
        }

    }

    // return something here;
    return;
}