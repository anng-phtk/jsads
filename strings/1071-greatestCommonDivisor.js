/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdGeneral = function (num1, num2) {
    while (num2 > 0) {
        let temp = num1;
        num1 = num2;
        num2 = temp % num2;
    }

    return num1;
};

var testPattern = function (strToTest, subStrLen) {
    let prevSubStr = strToTest.slice(0, subStrLen);
    

    for (let i = subStrLen; i < strToTest.length; i = i + subStrLen) {
        let newSubStr = strToTest.slice(i, i + subStrLen);
        if (prevSubStr !== newSubStr) return false;
        
        prevSub = newSubStr;
    }

    return true;
}

var gcdOfStrings = function (str1, str2) {
    // 1st lets check if the strings are matching properly
    if (str1.slice(0, str2.length) !== str2) return "";

    let num1 = str1.length; // assuming longer string;   // ABC ABC ABC ABC ABC = 12
    let num2 = str2.length; // assuming shorter string;  // ABCABC = 6

    if (str1.concat(str2) !== str2.concat(str1)) return "";

    // get the 1st lvl gcd
    let sliceInterval = gcdGeneral(num1, num2);

    // test that remaining strings are compliant i.e. the pattern in consistent till the end of both strings
    if (testPattern(str1, sliceInterval) && testPattern(str2, sliceInterval)) return str2.slice(0, sliceInterval);

    return "";
};

str1test = "TAUXXTAUXXTAUXXTAUXXTAUXX"
str2test = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
console.log(gcdOfStrings("ABCABC", "ABCABC")); // expected output is 3