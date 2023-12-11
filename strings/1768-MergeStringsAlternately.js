/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternately = (word1, word2) => {
    let iter = (word1.length > word2.length)? word1.length: word2.length;
    let accumlator = [];

    for (let i=0; i<iter; i++) {
        // check performance on unshift vs accumulator.reverse()
        if (word1[i]) accumlator.push(word1[i]);
        if (word2[i]) accumlator.push(word2[i]);
    }

    // check what accumulator looks like
    // console.log(accumulator)

    return accumlator.join('');
};


// approach
// set the iterator to length of the longest word
// set pointer1 to 1st letter of 1st word
// set pointer2 to 1st letter of 2nd word
// set accumulator array, init to empty

// start iteration
// push letter under pointer1 and move pointer forward
// push letter under pointer2 and move pointer forward
// repeat until we reach the end

// accumlator reverse and join