/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 */

const minWindow = (s,t) => {
    if (t.length > s.length) return "";
    let tFreq = new Array(52).fill(0);
    let sFreq = new Array(52).fill(0);
    let seenChars = 0;
    let ans = '';
    const getIdx = (chr) => {
        return chr.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    

    // valid only if each index in the longArray contains a number eq to or gt the same index in shortArray 
    const isValid = (shortArray, longArray) => {
        let valid = true;
        for (let i = 0; i < 52; i++) {
            if (shortArray[i] > longArray[i]) {
                return false;
            }
        }
        return valid;
    }

    // populate shortArray
    for (let i = 0; i < t.length; i++) {
        let idx = getIdx(t[i]);
        tFreq[idx]++; 
    }

    let [l,r] = [0,0];
    for (let r = 0; r < s.length; r++) {
        let rIdx = getIdx(s[r]);

        if (tFreq[rIdx] > 0 ) {
            sFreq[rIdx]++;
            seenChars++;


            let valid = false;
            if (seenChars === t.length) valid = isValid(tFreq, sFreq);
        }        


        while (seenChars === t.length) {
            ans = (ans.length === 0) ? s.substring(l,r+1) :  ((s.substring(l,r+1).length < ans.length) ? s.substring(l,r+1) : ans); 
            
            let lIdx = getIdx(s[l]);
            if (tFreq[lIdx] > 0) {
                sFreq[lIdx]--;
                seenChars--;
            }
            l++;
        }
        console.log(l, r)
    }

    return ans;
}




var minWindow_withMap = function(s, t) {
    if (t.length > s.length) return "";
    let [l,r] = [0,0];
    let ans = '';
    const getIdx = (chr) => {
        return chr.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    // worst case is 52 long map, so O(1)
    let tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i])??0)+1);
    }

    // worst case is 52 long map, so O(1)
    let sMap = new Map();


    while (r < s.length) {
        
        if (tMap.has(s[r])) {

            if (isValidMap(tMap, sMap) === false) {
                sMap.set(s[r], (sMap.get(s[r])??0)+1);
                
            }

            while (isValidMap(tMap, sMap)) {
                // take a distance
                ans = (ans.length === 0) ? s.substring(l,r+1) :  ((s.substring(l,r+1).length < ans.length) ? s.substring(l,r+1) : ans); 
                console.log(ans);

                if (tMap.has(s[l])) {
                    sMap.set(s[l], (sMap.get(s[l])??0)-1);
                }
                l++;
            }
            
            
        }

        r++;
        
    }

    console.log(tMap, sMap, l, r);
    return ans;
};


// a map is valid only when m2 contains same entries as m1 and when m2.key's value is GTE m1.key's value 
const isValidMap = (m1, m2) => {
    let areEqual = true;

    if (m1.size !== m2.size) {
        console.log(`size fails`);
        return false;
    }

    for (let [k,v] of m1) {

        if (!m2.has(k)) {
            console.log('element absent')
            return false;
        }

        if (m1.get(k) > m2.get(k)) {
            console.log('presence failed because m1=', v, m1.get(k), ' and m2=', m2.get(k));
            return false;
        }
        
    }

    return areEqual;
}

//console.log(compareMap(m1, m2));
//console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"))