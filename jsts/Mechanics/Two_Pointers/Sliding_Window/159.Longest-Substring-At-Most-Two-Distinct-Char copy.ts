const longestSubstr = (s:string): number => {
    // if only 2, 1 or 0 elements in the array (array len = 0 to 1), then thats the max length
    if (s.length <= 1) return s.length; 
    
    let result: number = 0;
    let charFreq:Array<number> = new Array<number>(26).fill(0);
    // helper to convert a letter to charcode
    const getIdx = (letter:string):number => {
        return (letter.charCodeAt(0) - 'a'.charCodeAt(0));
    }
    let [l,r]:[number, number] = [0,0];   
    while (r < s.length) {
        let rCharIdx: number = getIdx(s[r]);
        // we saw it, account for it
        charFreq[rCharIdx]++;

        let numDistinctSeen: number = 0;
        // we need exactly 2 distinct chars in a string
        for (let i: number = 0; i < charFreq.length; i++) {
            if (charFreq[i] > 0) {
                numDistinctSeen++;
            }
        }

        // shrink the window now
        while (numDistinctSeen > 2) {
            let lCharIdx: number = getIdx(s[l]);
            charFreq[lCharIdx]--;
            l++;

            let temp:number = 0;
            for (let i: number = 0; i < charFreq.length; i++) {
                if (charFreq[i] > 0) {
                    temp++;
                }
            }
            numDistinctSeen = temp;
        }

        result = Math.max(result, r-l+1);
        r++;
    }

    return result;
}


//let str: string = "abababab";
let str: string = "eceba";
console.log('1. result = ', longestSubstr(str));

str = "ccaabbb";
console.log('2. result = ', longestSubstr(str));

str = "aabcabbbbb";
console.log('3. result = ', longestSubstr(str));


str = "abaccc";
console.log('4. result = ', longestSubstr(str));


let s = "abababab" // → 8
console.log('5. result = ', longestSubstr(s));
s = "ababa" //→ 5
console.log('6. result = ', longestSubstr(s));


s = "aaabbbccc"; // → 6 (“aaabbb” or “bbbccc”)
console.log('7. result = ', longestSubstr(s));
s = "abcbbbbcccbdddadacb"; // → 10 (this is a known stress case)
console.log('8. result = ', longestSubstr(s));

s = "bbbbbbbb" //→ 8
console.log('9. result = ', longestSubstr(s));

s = "abcdef" //→ 2
console.log('10. result = ', longestSubstr(s));


console.log('sanity. result = ', longestSubstr(""));

console.log('sanity. result = ', longestSubstr("a"));

console.log('sanity. result = ', longestSubstr("aa"));

console.log('10. result = ', longestSubstr("ab"));
