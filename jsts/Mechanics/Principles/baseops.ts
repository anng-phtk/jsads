
// we consider only a-z
// later we can expand this case to A-Za-z 
export const charHash = (letter: string) => {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

const baseOps = (haystack: number[], needle: number[]):number => {
    const BASE = 10;
    const MOD = 1_000_000_000+7;

    let i: number = 0;
    let result: number = -1;
    let maxPower = 1;
    let needleHash: number = 0;
    for (; i < needle.length; i++) {
        needleHash = ((needleHash*BASE) + needle[i]) % MOD;

        // for a needle of array length 3 we need
        // power = 10 **0 
        //      then  **1 
        //      then  **2
        if (i <= needle.length-2) {
            maxPower = (maxPower * BASE) % MOD;
        }
    }

    let j: number = 0;
    let haystackHash: number = 0;
    for (; j < needle.length; j++) {
        haystackHash = ((((haystackHash * BASE) + haystack[j]) % MOD) + MOD) % MOD
    }

    if (haystackHash === needleHash) {
        // one more comparison of actual string will be needed to be 100% sure
        // 'starting index = ', j-needle.length+1
        result = 0;
        return result;
    }

    for (; j < haystack.length; j++) {
        
        // need to chop off the leading value
        let leadingVal =(((haystack[j - needle.length] * maxPower) % MOD) + MOD) % MOD ; // this will maintain the significant digit. 
        haystackHash = (((((haystackHash-leadingVal) * BASE) + haystack[j]) % MOD) + MOD) % MOD;
        
        if (haystackHash === needleHash) {
            // one more comparison of actual string will be needed to be 100% sure
            // 'starting index = ', j-needle.length+1
           result = j-needle.length+1;
           return result;
        }

    }


    return result;
}


console.log( baseOps([4,6,1,2,3,5,6,7], [1,2,3]) );