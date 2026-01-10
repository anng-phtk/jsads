const minimumCardPickup = (cards: number[]): number => {
    let result: number = Number.POSITIVE_INFINITY;
    let [l,r]: [number,number] = [0, 0];

    // as we flip thru the cards, we will keep track of these cards in a map. 
    // as soon as we see the same card again, then...
    let seenCards: Map<number, number> = new Map<number, number>();
    
    while (r < cards.length) {
        // increment the card if we saw it
        // if not seen, set it to 1
        seenCards.set(cards[r], (seenCards.get(cards[r])??0)+1);

        // the moment we see the card 2nd time, we need to take stock of ho
        while ((seenCards.get(cards[r])??0) >= 2) {
            seenCards.set(cards[l], (seenCards.get(cards[l])??0)-1)
        
            if ((seenCards.get(cards[l])??0) === 1) {
                result = Math.min(result, r-l+1);
            }

            l++;
        } 
        
        r++;
    }

    return (result === Number.POSITIVE_INFINITY)?-1:result;
};