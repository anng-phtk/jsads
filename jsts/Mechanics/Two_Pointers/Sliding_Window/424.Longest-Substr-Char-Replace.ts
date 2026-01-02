const characterReplacement = (s: string, k: number): number => {
    let result = 0;
    
    let freqArr: Array<number> = new Array<number>(26).fill(0);
    let [l,r]:[number, number] = [0,0];


    const getIdx = (char:string): number => {
        return (char.charCodeAt(0) - 'A'.charCodeAt(0));
    }

    // the 1st intuition is, 1 constant and k different letters can change for longest string
    let windowLen: number = k+1;

    while (r < s.length) {
        let rCharIdx = getIdx(s[r]);
        // account for what we see
        freqArr[rCharIdx]++;

        let maxFrequency: number = 0;
        for (let i: number = 0; i < freqArr.length; i++) {
            if ( freqArr[i] > 0 ) {
                // keep track of the most occuring letter in the list
                maxFrequency = Math.max(maxFrequency, freqArr[i]);  
            } 
        }

        // the most occuring letters + k letter should make the longest substring
        // that is our window
        windowLen = maxFrequency + k;
        // this will make the window variable for each freq change
        
        // whenever the window size is smaller than the current distance between l and r, lets move l forward
        while (windowLen <= r-l ) {
            let lCharIdx: number = getIdx(s[l]);
            // when L moves ahead, subtract the last letter from freq array
            freqArr[lCharIdx]--;    
            l++;    
        }
        
        // this distance is our window. choose the largest window.
        result = Math.max(result, r-l+1);
        r++;
    }

    return result;
};


interface testCase {
    s: string;
    k: number;
}
const testRunner = ():void => {
    let testCases:Array<testCase> = [
        {'s':"ABAB", 'k': 2},
        {'s':'AABABBA', 'k': 1},
    ];

    for (let i of testCases) {
        console.log(characterReplacement(i.s, i.k))
    }
}

testRunner();