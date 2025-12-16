const isAnagram = (s: string, t: string): boolean => { 
    // if they are not the same length, then automatic false
    if (s.length !== t.length) return false;
    let check: number[] = new Array(26).fill(0);
    //let check2: number[] = new Array(26).fill(0);

    for (let letterIdx:number = 0; letterIdx < s.length; letterIdx++ ) {
        check[s.charCodeAt(letterIdx) - 97]++;
        check[t.charCodeAt(letterIdx) - 97]--;
    }
    
    return check.every(c => c === 0); // nice and succint

}
const isAnagram_junior = (s: string, t: string): boolean => {
    let ngramCheck: Map<string, number> = new Map <string, number>();
    // I don't like assumung this is true.
    // is this risky, if there is a flaw in my algo, ?
    let result: boolean = true;
    
    if (s.length !== t.length) return false;

    for (let letter of s) {
        ngramCheck.set(letter, (ngramCheck.get(letter)??0)+1);
    }

    for (let letter of t) {
        ngramCheck.set(letter, (ngramCheck.get(letter)??0)-1);
    }

    for (let [k,v] of ngramCheck) {
        if (v > 0) return false;
    }

    return result;
};