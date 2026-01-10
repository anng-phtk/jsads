const minimumRecolors = (blocks: string, k: number): number => {
    
    let seenWhites: number = 0;

    // lets plan to use a fixed size rolling window. 
    let [l,r]: [number, number] = [0, 0];

    // account for all the white boxes as the right edge becomes k wide
    // the conditions are --  1 <= k <= n and 1 <= n <= 100
    // so we can try without any special guards

    for (; r < k; r++) {
        if (blocks[r] === 'W') seenWhites++;
    }

    let minWhitesReq = seenWhites;

    for (; r < blocks.length; r++, l++) {
        if (blocks[l] === 'W') seenWhites--;
        if (blocks[r] === 'W') seenWhites++;

        minWhitesReq = Math.min(minWhitesReq, seenWhites);
    }

    return minWhitesReq;
}