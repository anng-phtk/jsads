/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let result = 0;
    let prefixSum = 0;
    // precompute all 1s
    for (let i = 0; i < s.length; i++) {
        prefixSum +=  (s[i].charCodeAt(0) === '0'.charCodeAt(0))? 0 : 1;
    }

    
    let numZerosSeen = 0; 

    // we keep the pointer movement to 1 less than the full array length,
    // because when all the 0s and 1s are on left side, we cannot have a legitimate split.

    for (let j = 0; j < s.length-1; j++) {
        if (s[j].charCodeAt(0) === '0'.charCodeAt(0)) {
            numZerosSeen++;
        }
        else{
            prefixSum--;
        }

        result = Math.max(prefixSum+numZerosSeen, result)

    }

    return result;
};

console.log(maxScore('00'));