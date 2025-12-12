 /**
     * I don't think we need to sort 
    
    // if we do sort we are adding O(n log n)
    // find an idomatic sorting syntax
    nums.sort((a: number, b: number) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    });
    then we can run a 2 pointer solution on this i.e. 
    advance both pointers until the diff is 1
    */


const longestConsecutive = (nums: number[]): number => {
    let result: number = 0;
    let temp: Array<Array<number>> = new Array<Array<number>>();
   
    let seqncTestSet:Set<number> = new Set<number>();

    // add all elements to a set and shrink the problem to remove any dupes
    // time O(n); space O(k) where worst case is k = n 
    for (let i: number = 0 ; i < nums.length; i++) {
        seqncTestSet.add(nums[i]);
    }


    // even if there are multiple nested loops here, the work done will remain O(k)
    // because the pointers do not move back and/or forth and repeat anything.
    // they take the 1st number and loop over the set to remove subsequent elements. 
    // thus reducing the overall outer for loop's scope on each go around. 
    for (let k of seqncTestSet) {
        let subTemp: number[] = new Array();
        subTemp.push(k);
        let num: number = k;

        while (seqncTestSet.has(num+1)) {
            subTemp.push(num+1);
            seqncTestSet.delete(num+1);
            num = num+1;
        }

        num = k;
        while (seqncTestSet.has(num-1)) {
            subTemp.push(num-1);
            seqncTestSet.delete(num-1)
            num = num-1;
        }

        // now clear it out
        seqncTestSet.delete(k);

        
        // now we have subarrays of sequences
        temp.push(subTemp);
    }

    // all we need to do it run a loop to find the max size    
    for (let innerArrSize: number = 0; innerArrSize < temp.length; innerArrSize++) {
        result = Math.max(result, temp[innerArrSize].length);
    }
    
    return result;
};

let nums = [100, 4, 200, 1, 3, 2, 5, 101];
console.log(`final = `, longestConsecutive(nums));
// expected Output: 4
