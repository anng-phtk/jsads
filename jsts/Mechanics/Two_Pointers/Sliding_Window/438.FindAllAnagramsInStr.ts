/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s:string, p:string):number[] => {
    let [l,r]:[number, number] = [0,0];
    let result: Array<number> = new Array<number>();

    const freq: Array<number> = new Array<number>(26).fill(0); 
    const getIdx = (letter:string):number => {
        if (!letter) return 0;
        return letter.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    // frequency array of p
    for (let chr of p) {
        let idx: number = getIdx(chr);
        freq[idx]++; 
    } 

    let freqHash:string = freq.join('');

    let temp:Array<number> = new Array<number>(26).fill(0);
    for (; r < p.length; r++) {
        let idx: number = getIdx(s[r]);
        temp[idx]++;
    }

    // lets check if we have an anagram?
    // if we do, we must put l which is at 0
    if (freqHash === temp.join('')) result.push(l);


    for (; r < s.length; r++, l++) {
        let idx: number = getIdx(s[r]);
        temp[idx]++;

        idx = getIdx(s[l]);
        temp[idx]--;

         if (freqHash === temp.join('')) result.push(l);
    }

    return result;
};