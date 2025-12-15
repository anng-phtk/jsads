const findRepeatedDnaSequences = (s: string): string[] => {
    let window: number = 10;

    let freqMap: Map<string, number> = new Map<string, number>();
    let ans:Array<string> = new Array<string>();
    for (let [i,j]: [number, number] = [0, window]; i < s.length; i++, j++) {
        let strSlice:string = s.substring(i,j);

        if (freqMap.has(s.substring(i,j))) {
            ans.push(strSlice);
        }
        else {
            freqMap.set(s.substring(i,j), 2);
        }
    }

    
    return ans;

};