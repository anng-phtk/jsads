const maxSatisfied = (customers: number[], grumpy: number[], minutes: number): number => {
    let baselineHappyCust: number = 0;
    let totalHappyCust: number = 0;
    let CUST_LEN: number = customers.length;
    
    // set a baseline for all happy customers
    customers.forEach((val, idx) => {
        baselineHappyCust += (grumpy[idx] === 0)? val: 0;
    });
    

    // lets run a small loop over m minutes section of the customer's array to see how many we add to the baseline
    let newHappyDueToSpell: number = 0;
    for (let i: number = 0; i < minutes /*customers.length*/; i++) {
        if (grumpy[i] === 1) {  
            newHappyDueToSpell += customers[i];
        }
    }
    // now we should have newHappyDueToSpell+baselineHappyCust 
    totalHappyCust = newHappyDueToSpell+baselineHappyCust; // going forward, we will use this to keep a max Happy total

    for (let [left, right]: [number,number] = [0,minutes]; right < customers.length; right++, left++) {
        if (grumpy[right] === 1) {  
            newHappyDueToSpell += customers[right];
        }

        if (grumpy[left] === 1) {  
            newHappyDueToSpell -= customers[left];
        }

        totalHappyCust = Math.max(totalHappyCust, newHappyDueToSpell+baselineHappyCust);
    }

    return totalHappyCust;

};

let customers = [1,0,1,2,1,1,7,5];
let grumpy = [0,1,0,1,0,1,0,1];
let minutes = 3;

let retval = maxSatisfied(customers, grumpy, minutes);

console.log(retval);