const maxVowels = (s: string, k: number): number => {
    let vowels: Set<string> = new Set<string>(['a','e','i','o','u']); // this is O(5) therefore O(1) space
    let [left, right]:[number, number] = [0,k];

    let numVowelsFound:number = 0;


    // lets start with first k letters in the string and find out
    // work done in finding vowels is O(n)  
    for (let i: number = 0; i < k; i++) {
        if (s[i] && vowels.has(s[i])) {
            numVowelsFound++;
        }
    }

    let maxFound = numVowelsFound;

    // work done in finding vowels is O(n)
    while (right < s.length) {
        // add when rigt pointer moves fwd and encounters a vowel
        if (s[right] && vowels.has(s[right])) {
            numVowelsFound++;
        }

        // reduce when left pointer moves and encounters a vowel
        if (s[left] && vowels.has(s[left])) {
            numVowelsFound--;
        }

        // advance the window
        left++;
        right++;

        maxFound = Math.max(numVowelsFound, maxFound);
    }

    //return this value
    return maxFound;

};