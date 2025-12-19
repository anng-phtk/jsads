const characterReplacement = (s: string, k: number): number => {
    let result = 0;
    
    let freqArr: Array<number> = new Array<number>(26).fill(0);
    let [l,r]:[number, number] = [0,0];

    const getIdx = (char:string): number => {
        return (char.charCodeAt(0) - 'a'.charCodeAt(0));
    }

    while (r < s.length) {
        let rCharIdx = getIdx(s[r]);
        rCharIdx++;

        let numDistinctSeen: number = 0;
        let maxFrequency: number = 0;
        for (let i: number = 0; i < freqArr.length; i++) {
            if ( freqArr[i] > 0 ) {
                numDistinctSeen++;
                maxFrequency = Math.max(maxFrequency, freqArr[i]);
            } 
        }

        // this will make the window variable for each freq change
        let windowLen: number = maxFrequency + k;
        while ((windowLen - maxFrequency) >= k) {
            let lCharIdx: number = getIdx(s[l]);

            freqArr[lCharIdx]--;
            if (freqArr[lCharIdx] === 0) numDistinctSeen--;

            l++;
        }
        

        result = Math.max(result, l-r);
    }

    return result;
};


interface testCase {
    s: string;
    k: number;
}
const testRunner = ():void {
    let testCases:Array<testCase> = [
        {'s':"ABAB", 'k': 2}
    ];

    for (let i of testCases) {
        console.log(characterReplacement(i.s, i.k))
    }
}
