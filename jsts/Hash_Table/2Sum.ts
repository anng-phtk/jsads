const twoSum = (nums:number[], target:number) => {
    // store for a "set" of complements
    let comps: Set<number> = new Set<number>();
    let seenItsCompl: number = 0;
    // loop over our input array
    for (let i: number = 0; i < nums.length; i++) {
        // check if we have stored this number in our complement's array
        if (!comps.has(nums[i])) { // no we did not
            let c: number = target - nums[i]; // check for completement
            comps.add(c); // store the complement in our array because we want to see if we ever come across the complete as we scan further
        }
        else { // we see a complemente
            seenItsCompl = i; // something in our set is a complete of this number. store its index
            break;
        }
    }

    console.log(comps, seenItsCompl)
    // at this time we should see the set and seenItsComplement index correctly
    // now we can run a 2nd pass
    for (let j: number =0; j < nums.length; j++) {
        if (nums[j] + nums[seenItsCompl] === target && j !== seenItsCompl) {
            return [j, seenItsCompl];
        }
    }
    


}

let nums = [1,4,3,2,3];
let target = 6;

let retval = twoSum(nums, target);

console.log(retval);
