/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// this is setting a array of indexes in a map
// we can also use frequencies of the numbers
var maxOperations = function(nums, k) {
    const complements = new Map();
    for (let i=0; i<nums.length; i++) {
        let complement = k-nums[i];

        if (!complements.has(complement)) complements.set(complement, new Array());
        
        complements.get(complement).push(i);
    }


    let counter = 0;
    for (let i =0; i< nums.length; i++) {
        if (!complements.has(nums[i])) continue;

        let temp1 = complements.get(nums[i]).pop();
        if (!complements.get(nums[i]).length) complements.delete(nums[i]);

        if(!complements.get(nums[temp1])) continue;
        let temp2 = complements.get(nums[temp1]).pop();
        if (!complements.get(nums[temp1]).length) complements.delete(nums[temp1]);
        
        
        console.log(complements);
        counter++;
    }

    
    console.log("answer", nums, counter);

    return counter;
};


maxOperations([1,1,2,3,4,3], 5);
maxOperations([4,4,3,4], 8);

/*
k=5
[1,1,2,3,4,3]

4=> [0,1],
3=> [2],
3=> [3,5]
1=> [4]


complements.get(nums[i]) == i


*/