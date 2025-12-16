const findMaxLength = (nums: number[]): number =>  {
    // temp, we need not save anything in the auxiliary array
    // I am adding for debugging now. 
    // todo: get rid of this later
    const tempPref: number[] = new Array<number>(); 
    let sum: number = 0;
    let result: number = 0;
    // need to see if we can consider a hashset. probably not because we need the index
    const map: Map<number, number> = new Map<number, number>(); 
    // initialize map with 0 because left prefix sum is zero
    map.set(0,-1);


    nums.forEach((val: number, idx: number) => {
        tempPref[idx] = (tempPref[idx-1]??0) + ((val === 1)? 1: -1);
        sum += (val === 1)? 1 : -1;
        
        if (map.has(sum)) {
            // we have found it!
            let indexDiff: number = idx - (map.get(sum)??0);

            result = Math.max(result, indexDiff);
        }
        
        map.set(sum, idx);
    });
    
    console.log(tempPref, result)
    return result;
};

let nums =[0,1,0,0,1,1]

findMaxLength(nums);