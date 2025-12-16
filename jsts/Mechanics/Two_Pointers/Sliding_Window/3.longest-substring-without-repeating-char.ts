const lengthOfLongestSubstring = (s: string): number => {
    if (s.length <= 1) return s.length;

    let result: number = 0;

    let seenChars: Set<string> = new Set<string>();

    let [left, right]: [number, number] = [0, 0];


    while (right < s.length) {
        if (!seenChars.has( s[right] )) {
            seenChars.add(s[right]);
            right++;
        }
        else {
            seenChars.delete(s[left])
            left++;
        }

        result = Math.max(result, right-left); 
    }

    return result;
}