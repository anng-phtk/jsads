/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let frequencyMap = new Map();
    /*
    frequencyMap will look like:
    a => 1
    b => 12
    maps in javascript are ordered and maintain ordering
    */

    for (let i=0; i<chars.length; i++) {
        if (frequencyMap.has(chars[i])) {
            frequencyMap.set(chars[i], frequencyMap.get(chars[i])+1)
        }
        else {
            frequencyMap.set(chars[i], 1)
        }
    }

    let answerStr = '';
    for (let [k,v] of frequencyMap) {

        console.log("map:", k, v);

        answerStr += k;
        if (v > 1) {
            answerStr += v;
        }
    }

    console.log( answerStr.split(''));
    return answerStr.split('');
};


compress(["a","a","b","b","c","c","c"]);