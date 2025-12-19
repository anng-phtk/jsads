const longestSubstr1Rpt = (s:string): number => {
    // no need to perform the rest of the work if the string is empty or only 1 char long
    if (s.length <= 1) return s.length;

    let result: number = 0;


    let charFreqArr: number[] = new Array<number>(26).fill(0); // fixed size, so O(1) space
    let lastSeenTwice:number = 0; //[] = new Array<number>(2).fill(-1); // this is 2 long, so O(1) space 

    let [left, right]:[number, number] = [0,0];


    const getIdx = (alphabet:string): number => {
        return alphabet.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    while (left < s.length && right < s.length) {

        let rCharIdx:number = getIdx(s[right]);
        

        // we saw it, so lets account for it
        charFreqArr[rCharIdx]++;

        for (let i = 0; i < 26; i++) {
            if (charFreqArr[i] === 2) {
                lastSeenTwice++;

                // no need to loop if we see 2 pairs
                if (lastSeenTwice === 2) break;
            }
        }

        if (lastSeenTwice === 2) {
            // we should capture the string lenght here
            result = Math.max(result, right-left);

            // now prepare to move the left pointer
            while (lastSeenTwice === 2) {
                let lcharIdx: number = getIdx(s[left]);

                // we saw it, so lets account for it
                charFreqArr[lcharIdx]--;
                left++;

                let temp: number = 0;
                for (let i = 0; i < 26; i++) {
                    if (charFreqArr[i] === 2) {
                        temp++;
                    }
                }

                lastSeenTwice = temp;

            }
            
        }

        right++;
    }

    result = Math.max(result, right-left);
    
    return result;
}


let str: string = "abba";
console.log('result = ', longestSubstr1Rpt(str));