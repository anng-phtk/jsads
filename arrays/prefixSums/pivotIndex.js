
/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
    let fullSum = 0;
    
    nums.forEach(e => {
        fullSum+=e;
    });

    console.log(fullSum);

    let [prefix, suffix] = [0, fullSum]
    for (let i=0; i<nums.length; i++) {
        prefix += nums[i];
        suffix -= nums[nums.length-1-i];

        console.log(prefix, suffix);
        if (prefix === suffix) return i+1;
    }

    return -1
}

const pivotIndex2 = (nums) => {
    let [prefix, suffix] = [0,0];

    let [prefArr, suffArr] = [[0], [0]];

    for (let i=0; i<nums.length; i++) {
        prefix += nums[i];
        suffix += nums[nums.length-1-i];     
        
        console.log(prefix, suffix)

        if (i < nums.length-1) {
            prefArr.push(prefix);
            suffArr.push(suffix);
        }
    }

    console.log("array:", prefArr, suffArr)

    for (let i=0; i<prefArr.length; i++) {
        if (prefArr[i] === suffArr[suffArr.length-1-i]) {
            return i;
        }
    }

    

    return -1;
};



let i = pivotIndex([1,7,3,6,5,6]);
//let j = pivotIndex([1,2,3]);
//let k = pivotIndex([2,1,-1])
//let l = pivotIndex([-1,-1,0,0,-1,-1])

//console.log("solutions", i, j, k, l)