const collectOddEvenSubarraysBrute = (arr) => {
    const evenSums = [];
    const oddSums  = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];

            const subarray = arr.slice(i, j + 1);
            if (sum % 2 === 0) {
                evenSums.push(sum);
                console.log(`even: `, subarray)
            } else {
                oddSums.push(sum);
                console.log(`ODD: `, subarray)
            }
        }

    }
    // this is visual proof of what the sub-arrays look like. 
    console.log(oddSums);
    console.log(evenSums);
    console.log(`\nTotal odd-sum subarrays: ${oddSums.length}`);
    console.log(`Total even-sum subarrays: ${evenSums.length}`);

    
    return { oddSums, evenSums };
};


const OddEvenSubarrays = (arr) => {
    
    const evenSums = [0];
    const oddSums  = [];
    const buckets = [evenSums, oddSums];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        buckets[ sum % 2 ].push(sum);
    }

    // visual proof the combinatorics approach works and is better than counting evens and odds in an unsual hacky way of leetcode editorial
    console.log(oddSums);
    console.log(evenSums);
    
    
    // all even summed subarrays are collected into: 
    const evenLen = buckets[0].length;

    // all odd summed subarrays are collected into:
    const oddLen = buckets[1].length;

    // we can get all even summed subarrats because a pair of odd summed subarrays to make an even summed subarray
    const allEvens = ((evenLen*(evenLen-1))/2) + ((oddLen*(oddLen-1))/2);

    // if we want purely odd summed subarrays then
    const ans = evenLen*oddLen;

    return { 'evens': allEvens, 'odds':ans };
};


const nums = [1,3,5];
const numsLen = nums.length
const totalArrays = (numsLen*(numsLen+1))/2; 

console.log(`Total possibilites: ${totalArrays}. Odd Even Summed Subarrays - efficient = ` , OddEvenSubarrays(nums));


console.log(`Total possibilites: ${totalArrays}. Odd Even Summed Subarrays - efficient = ` , collectOddEvenSubarraysBrute(nums));
//console.log(`result = ` , collectOddEvenSubarraysBrute([1,3,5]));
