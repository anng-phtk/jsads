import { charHash } from "../Principles/baseops";

const strStr = (haystack: string, needle: string): number => {
    if (needle.length > haystack.length) return -1;

    const MOD: number = 1_000_000_007; // protect ourselves from integer overruns

    // we can use base 10 for visually checking how this works
    // it is best if we can use 131 or 257 for avoiding collisions
    const BASE: number = 131; 


    const getCharHash = (letter: string) => {
        // we want to represent a = 1 and not a = 0
        return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    // lets do a 1st pass
    let i: number = 0;
    let needleHash: number = 0;
    

    // how many digits are there in needle? 
    // what is the most signifincant digit
    // if needle = [a,b,c] -- that translates to [1,2,3] then the hash becomes 100+20+3 = 123 in base 10.
    let maxPower: number = 1;

    for (; i < needle.length; i++) {
        let charHash: number = getCharHash(needle[i]);
        needleHash = ((((needleHash * BASE) + charHash) % MOD) + MOD) % MOD; 

        if (i <= needle.length-2) {
            maxPower = (maxPower * BASE) % MOD; // protect from integrer overrun. our constraint is  needle.length <= 10**4
        }
    }

    // now lets do a rolling window
    let j: number = 0;
    let haystackHash: number = 0;

    for (; j < needle.length; j++) {
        let charHash: number = getCharHash(haystack[j])
        haystackHash = ((((haystackHash * BASE) + charHash) % MOD) + MOD) % MOD;  
    }

    
    if (haystackHash === needleHash) {
        // double check what we have found0
        if (needle === haystack.substring(0, needle.length)) return 0;
    }


    for (; j < haystack.length; j++) {
        let leadingCharHash: number = getCharHash(haystack[j - needle.length]);
        let leadingVal: number = (((leadingCharHash * maxPower) % MOD) + MOD) % MOD;
        
        let charHash: number = getCharHash(haystack[j]);
        haystackHash = (((((haystackHash-leadingVal)*BASE) + charHash) % MOD) + MOD) % MOD 
    
        if (haystackHash === needleHash) {
            let result: number = j - needle.length+1;
            // double check what we have found
            if (needle === haystack.substring(result, result+needle.length)) return result;
        }
    }

    return -1;
}


console.log(strStr('adbustsad', 'sad'))