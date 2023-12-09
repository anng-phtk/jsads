/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {

    let vowels = new Set(['a','e','i','o','u']);
    let temp = s.split('');

    let [leftPtr, rightPtr] = [0, temp.length-1];
    
    while (leftPtr < rightPtr) {
        //advance pointers till they hit a vowel
        while (!vowels.has(temp[leftPtr]) && leftPtr < rightPtr) {
            leftPtr++;
        }

        while (!vowels.has(temp[rightPtr]) && leftPtr < rightPtr) {
            rightPtr--;
        }

        // if vowels are found at both pointers do the swap
        //when value is a vowel do the swap
        const tempPlaceholder = temp[rightPtr];
        temp[rightPtr] = temp[leftPtr];
        temp[leftPtr] = tempPlaceholder;
        // now advance pointers

        leftPtr++;
        rightPtr--;

    }

    return temp.join('');
    
};

console.log(reverseVowels("Hello"));