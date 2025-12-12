
const checkPermutation = (s1, s2) => {
    let shortArr = (s1.length < s2.length) ? s1 : s2;
    let longArr = (s1 !== shortArr) ? s1 : s2;
    let freqArr = new Array(26).fill(0);
    for (let alphabet of shortArr) {
        // lets put everything from a shortarray into a frequency map
        freqArr[alphabet.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    
    for (let i = 0; i < longArr.length; i++) {
        // make a copy of freq array, so we can use the frequencies to count
        let temp = Array.from(freqArr);

        // increment the counter so we can keep track of the number of letters we found sequentially
        let counter = 0;
        // find the position of this letter in the frequency array
        let letterPosition = longArr[i].charCodeAt(0) - 'a'.charCodeAt(0);

        let j = i; // move the 2nd pointer

        // if the position in the freqArray is greater than 0, then we should decrement
        while (temp[letterPosition] > 0 && (shortArr.length - counter) > 0 ) {
            temp[letterPosition]--;
            j++;
            counter++;
            letterPosition = longArr[j].charCodeAt(0) - 'a'.charCodeAt(0);
        }
        
        // if counter has incremented to shortArray's length, then we have exahusted the scan and found all the letters 
        // from the short array in the long array
        if (counter === shortArr.length) return true;
    }

    return false;
}

console.log(checkPermutation(s1, s2));

/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1.
 * My understanding: the letters from the shorter string must be present in the longer string as a "contiguous substring"
 * they can be in any order in the longer srting as long as they are together
 *
 *  The associated sample shows 
 * longS = eibdaooo
 * shortS = ab
 * 
 * the letter "ba" are present, and I can spot them from a visual scan as a continuous substring even if the order is inverted
 * 
 * APPROACH:
 * I will check which one is the shortstring 1st
 * shortStr = (s1.length < s2.length)? s1 : s2;
 * then the other one must be long string
 * longStr = (s1 !== shortStr) ? s1 : s2 ;  
 * 
 * Once we have found a short array, convert that into a map
 * first pass over the short array that results in something like this:
 * 
 * let iterationCounter = 0;
 * const reBuildMap = (arr) = {
 *     for (let i of shortStr) {
 *          count = (map.get(i)??0)+1;
 *          map.set(i, count);
 * 
 *          iterationCounter++;
 *      }
 * }
 * { a: 2, b: 1} for [a, b, a]; // O(m) space
 * 
 * then we start the scan of the long array
 * for (let i = 0; i < longStr.length; i++)  // o(n)
 * 
 * once in the loop we are looking for the first alphabet from the map
 * if (map.has(lonsStr[i])) { 
 *      lets say we come across "a" in a string of "aeibaaou"
 *      we start another while
 * 
 *      let j = i; 
 * 
 *      while (j - i <= iterationCounter) // o(k)
 *          if map.has(s[j]);
 *              map.get(s[j])--;
 *              j++;
 *          else
 *              break inner while
 *      if we have iterated over all map counts, then 
 *      if i-j === iterationCounter 
 *          return true
 *      else 
 *          rebuildMap
 *          
 * }
 * 
 */