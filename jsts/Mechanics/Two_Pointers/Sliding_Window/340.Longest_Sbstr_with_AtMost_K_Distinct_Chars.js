let longestStrWithKChars = (s, k) => {
    // if k is bigger than the length of the string, then the whole string should be acceptable
    // if k itself is 0, then there is nothing to search
    if (k >= s.length) return s.length;
    else if (k === 0) return k;
    else if (!s) return 0;

    // use this array for bookeeping
    let freqCharArr = new Array(26).fill(0);
    
    let result = 0;

    // use this pointer pair for keeping track of the window
    let [l,r] = [0,0];
    
    // convenience method
    const getIdx = (char) => {
        return (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }
    
    // start window
    while (r < s.length) {
        // convert the letter to a 0 index position
        let rCharIdx = getIdx(s[r]);
        // increment the correct index
        freqCharArr[rCharIdx]++;

        // book-keeping for how many distinct letters we have seen
        let numDistinctSeen = 0;

        // to find how many disticnt seen, loop over fixed 26 alphabets and find out the num distint letters we have seen
        // everytime the count of an alphabet is more than 0, we have seen it
        for (let i = 0; i < freqCharArr.length; i++) {
            if (freqCharArr[i] > 0) numDistinctSeen++;
        }

        // k distinct are ok. even 1 more than k is not ok
        while (numDistinctSeen > k) {
            // should we keep track of the distance here
            // result = Math.max(result, r-l-1);

            let lCharIdx = getIdx(s[l]);
            // reduce the count in the freq array when the left ptr are leaving this position behind
            freqCharArr[lCharIdx]--
            // now we have to shink the window until we don't see k+1 distinct letters anymore.
            l++;

            // review frequency again
            if (freqCharArr[lCharIdx] === 0) numDistinctSeen--; 
            /**
             * Not needed if we use the above frequency review optimization
                let temp = 0;
                for (let i = 0; i < freqCharArr.length; i++) {
                    if (freqCharArr[i] > 0) temp++;
                }
                // update distinct seen values
                numDistinctSeen = temp;
             */
            
        }

        let pointerDistance = (r - l + 1);
        result = Math.max(result, pointerDistance);
        r++;
    }

    return result;
}





const runTest = () => {
    const tests = [
        {"s": "" ,   "k":  2, "assertion": 0},
        {"s":  "a",  "k":  1, "assertion": 1},
        {"s":  "a",  "k":  0, "assertion": 0},
        {"s":  "aa", "k":  1, "assertion": 2},
        {"s":  "ab", "k":  1, "assertion": 1},
        {"s":  "ab", "k":  2, "assertion": 2},
        {"s": "eceba", "k": 2, "assertion": 3},
        {"s": "aa", "k": 1, "assertion": 2},
        {"s": "abababab", "k": 2, "assertion": 8},
        {"s": "abababab", "k": 1, "assertion": 1},
        {"s": "ccaabbb", "k": 2, "assertion": 5},
        {"s": "aabcabbbbb", "k": 2, "assertion": 6},
        {"s": "aabcabbbbb", "k": 3, "assertion": 10},
        {"s": "abcdef", "k": 2, "assertion": 2},
        {"s": "abcdef", "k": 10, "assertion": 6},
    ];

    for (let tstInst = 0; tstInst < tests.length; tstInst++) {
        let strParam = tests[tstInst]["s"];
        let kParam = tests[tstInst]["k"];
        let expected = tests[tstInst]["assertion"];
        //console.log(`Running test of string = ${strParam}, k = ${kParam} expects a return of: ${expected}`)
        console.assert(longestStrWithKChars(strParam, kParam) === expected);
        console.log(`Test of string = ${strParam}, k = ${kParam} passed: ${expected}`)
    }
}

runTest();

//console.log(longestStrWithKChars("aa", 1))