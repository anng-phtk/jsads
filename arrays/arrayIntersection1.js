

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    // space o(n), time o(n)    
    let smallSet = (nums1.length <= nums2.length)? new Set(nums1) : new Set(nums2);

    // space o(m), time o(m) 
    let largeSet = (nums1.length > nums2.length)? new Set(nums1) : new Set(nums2);
    // space and time is o(n*m) for the above operation


    let answer = [];

    for (const key of smallSet.keys()) {
        if(largeSet.has(key)) {
            answer.push(key);
        }
    }

    return answer;
};