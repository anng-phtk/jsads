/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let answer = [];
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

    let [trailing, leading] = [0-k,0];

    let temp = 0;
    while (leading < s.length) {
        if (leading < k) {
            if (VOWELS.has(s[leading])) temp++;
            
            answer[0] = temp 
            console.log("trailing: ", trailing, " to:",s[leading], VOWELS.has(s[leading]), answer);
        }

        if (trailing >=0) {
            if (VOWELS.has(s[leading])) temp++;
            if (VOWELS.has(s[trailing])) temp--;

            console.log("from: ", s[trailing], " to:", s[leading], answer);
            answer.push(temp);
        }
        
        trailing++;
        leading++;
    }
    
    return Math.max(...answer);
};

console.log( maxVowels(s="ibpbhixfiouhdljnjfflpapptrxgcomvnb", k=33));
//onsole.log( maxVowels(s="aeiou", k=2))
//console.log( maxVowels(s="leetcode", k=3))