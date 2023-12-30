/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let [set1, set2] = [new Set(nums1), new Set(nums2)];

    let ans = [[], []];

    console.log(set1, set2)
    //compare in 1st set
    for (let i=0;i<nums2.length; i++) {
        if (set1.has(nums2[i])) set1.delete(nums2[i]);
    }

    //compare array 1 with the 2nd set
    for (let i=0;i<nums1.length; i++) {
        console.log(nums)
        if (set2.has(nums1[i])) set1.delete(nums1[i]);
    }

    console.log(set1, set2)
    return [Array.from(set1),  Array.from(set2)];
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference_concise = function(nums1, nums2) {
    let [set1, set2] = [new Set(nums1), new Set(nums2)];

    let ans = [[], []];

    for (let i of set1) {
        if (set2.has(i)) {
            // remove the intersection if the items is in both sets
            set1.delete(i);
            set2.delete(i);
        }
    } 

    return [[...set1],  [...set2]];
};
findDifference([1,2,3], [2,4,6]) 