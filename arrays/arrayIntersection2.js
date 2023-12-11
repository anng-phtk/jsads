/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = (nums1, nums2) => {
    let answer = [];

    // create a map
    let frequencyMap = new Map();

    // findout which is the longer array. use the smaller array as thats the one we need to exhaust
    let smallArr = (nums1.length <  nums2.length)? nums1 : nums2;
    let largeArr = (nums1.length >= nums2.length)? nums1 : nums2;
    
    // push the array and number frequencies into the map
    for (const n of smallArr) {
        if (frequencyMap.has(n)) {
            frequencyMap.set(n, frequencyMap.get(n)+1)
        }
        else {
            frequencyMap.set(n, 1)
        }
    }

    // now loop over the longer array
    // find out each number and its pair exhists in the map.
    // when we find it, decrement the frequency.
    // if less than 1, then delete the entry 
    for (let i=0; i<largeArr.length; i++) {

        if (frequencyMap.get(largeArr[i]) >= 1) {
            frequencyMap.set(largeArr[i], frequencyMap.get(largeArr[i])-1);
            result.push(largeArr[i]);
        }
        else {
            frequencyMap.delete(largeArr[i]);
        }

        // if we have exausted the map, no need to look further
        if (!frequencyMap.size()) {
            break;
        }

        //frequencyMap.get(largeArr[i]) // will get us the frequency in our map
    }


    return answer;
}



const option1_intersect = (nums1, nums2) => {
    let smallArr = (nums1.length <  nums2.length)? nums1 : nums2;
    let largeArr = (nums1.length >= nums2.length)? nums1 : nums2;
    let result = [];
    
    let [smallMap, largeMap] = [getFrequencyMap(smallArr), getFrequencyMap(largeArr)]
    
    // now a sample largeMap = {1=>2, 2=>2} and sample smallMap = {2=>2}      
    // now we take the smallest map and loop over its keys
    
    
    // look for the keys of larger map and multiply by value
    for (const [k,v] of smallMap.entries()) {
        for (let i=0; i<Math.min(smallMap.get(k), largeMap.get(k)); i++) {
            result.push(k)
        }
    }
    const getFrequencyMap = (nums) => {
        let frequencyMap = new Map();
        
        // loop over the nums array
        for (const n of nums) {
            // set map key as n from numbers
            // set 1 or add +1 to frequency of this number from nums
            if (frequencyMap.has(n)) {
                frequencyMap.set(n, frequencyMap.get(n)+1)
            }
            else {
                frequencyMap.set(n, 1)
            }
        }
        
        return frequencyMap;
    }
    
    return result;
}


let nums1 = [1,2,2,1]; let nums2 = [2,2];

console.log(intersect(nums1, nums2))