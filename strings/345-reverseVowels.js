/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {

    let vowels = new Set(['a','e','i','o','u']);
    let temp = s.split('');

    let [leftPtr, rightPtr] = [0, temp.length-1];
    
    while (leftPtr < rightPtr) {
        // advance the pointers if value is not a vowel
        if (!vowels.has(temp[leftPtr])) {
            leftPtr++
        }

        if (!vowels.has(temp[rightPtr])) {
            rightPtr--;
        }

        // if both are vowels then swap and resume
        if (vowels.has(temp[leftPtr]) && vowels.has(temp[rightPtr])) {
            //when value is a vowel do the swap
            const tempPlaceholder = temp[rightPtr];
            temp[rightPtr] = temp[leftPtr];
            temp[leftPtr] = tempPlaceholder;
            // now advance pointers

            leftPtr++;
            rightPtr--;
        }

    }

    return temp.join('');
    
};

console.reverseVowels("Hello")