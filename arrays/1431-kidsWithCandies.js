/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let tempArray = Array.from(candies);

    let tempMap = new Map();            // space = O(m)
    let result = [];                    // space = O(n) - because we will fill it with boolean values and end up with the same size as input

    candies.forEach((val,idx)=>{        // time = O(n)
        if (tempMap.has(val)) {
            tempMap.get(val).push(idx);
        }
        else {
            tempMap.set(val, [idx]);
        }
    });

    // for an array like [4,2,1,1,2] this map will look like
    // {4=>[0], 2=>[1,4], 1=>[2,3]}


    candies.sort((a,b)=>b-a);           // time = O(log n)
    let ptr1 = 0;
    let ptr2 = 0;

    console.log(candies)
    console.log("map", tempMap);


    
    while (ptr2 < candies.length) {
        console.log(candies[ptr2], "+",extraCandies, ">=",  candies[ptr1])
        let tempval=  (candies[ptr2]+extraCandies >= candies[ptr1]-candies[ptr2]);


        if (tempMap.has(candies[ptr2])) {
            for (let e of tempMap.get(candies[ptr2])) {
                console.log(e, " and ", tempval);

                result[e] = (candies[ptr2]+extraCandies >= candies[ptr1]);
            }

            tempMap.delete(candies[ptr2]);
        }

        console.log("------");
        ptr2++;

    } 
    
    
    console.log(result);

    return result;
};

kidsWithCandies([4,3,1,5,2], 2);