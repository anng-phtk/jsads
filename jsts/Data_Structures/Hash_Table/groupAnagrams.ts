const groupAnagrams = (strs:string[]):string[][] => { 
    // placeholder for result
    let result:Array<string[]> = new Array<string[]>();
    
    //generate a hash code based on the number of times a letter appears in the word
    let freqMap: Map<string, string[]> = new Map<string, string[]>();

    // loop over the words = O(n)    
    for (let word of strs) {
        let wordHash:number[] = new Array<number>(26).fill(0); // make a 26 long array to fit the lowercase alphabet

        // loop over the word string and capture the ascii code for each letter
        // since this will loop over the length of each string, the work done here is O(k)
        for (let ltrIdx: number = 0; ltrIdx < word.length; ltrIdx++ ) {
            // 48 to 57  - 0 - 9
            // 65 to 90  - A to Z
            // 97 to 122 - a to z 
            wordHash[word.charCodeAt(ltrIdx) - 97] += 1
        }
        // capture the full hash code of the word
        let hashStr: string = wordHash.join('#');

        if (!freqMap.has(hashStr)) freqMap.set(hashStr, []);

        freqMap.get(hashStr)?.push(word)
    }

    for (let [k,v] of freqMap) {
        result.push(v);
    }

    return result;
}


const groupAnagrams_junior = (strs:string[]):string[][] => { 
    // placeholder for result
    let result:Array<string[]> = new Array<string[]>();
    
    // accumulate the sorted word occurance
    let sortedMap: Map<string, string[]> = new Map<string, string[]>();
    // loop over the words = O(n) 
    for (let i of strs) {
        // sort and join it = O(k log k)
        let sortedWord:string = i.split('').sort((a:string, b:string) => {
            if (a.charCodeAt(0) < b.charCodeAt(0)) {return -1;}
            else if (a.charCodeAt(0) > b.charCodeAt(0)) {return 1;}
            else {return 0};
        }).join('');
        
        if (!sortedMap.has(sortedWord)) {
            sortedMap.set(sortedWord, [])
        }
        sortedMap.get(sortedWord)?.push(i)
    }
    
    for (let [k,v] of sortedMap) {
        result.push(v);
    }
    
    return result;
}


let grouped = groupAnagrams(['ate', 'wat', 'eat', 'tea' ]);
console.log(grouped);