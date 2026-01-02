const checkInclusion = (s1, s2) => {
    let ans = false;
    let s1Freq = new Array(26).fill(0); 

    const getIdx = (char)=> {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    // prepare a frequency array
    for (let i = 0; i < s1.length; i++) {
        let idx = getIdx(s1[i]);
        s1Freq[idx]++;
    }
    let str1 = s1Freq.join('');

    let [l,r] = [0,0];
    let temp = new Array(26).fill(0);

    for (; r < s1.length; r++) {
        let rCharIdx = getIdx(s2[r]);
        temp[rCharIdx]++;
    }

    if (temp.join('') === str1) return true;

    for (;r < s2.length; l++,r++) {
        let lCharIdx = getIdx(s2[l]);
        let rCharIdx = getIdx(s2[r]);

        temp[lCharIdx]--;
        temp[rCharIdx]++;

        if (temp.join('') === str1) return true;
    }

    return ans;
}


let s1 = 'abc';
let s2 = 'cccccbabbbaaaa';
console.log(checkInclusion(s1, s2));