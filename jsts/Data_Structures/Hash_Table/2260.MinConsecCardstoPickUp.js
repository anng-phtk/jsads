/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let seenCard = new Map();
    result = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (seenCard.has(cards[i])) {
            result = Math.min(i - (seenCard.get(cards[i])??0) + 1, result);
        }
        
        // we have taken stock of difference between a, a card. what if there is another a card. So we need to overwite the current position
        seenCard.set(cards[i], i);
    }

    return (result === Infinity)? -1 : result;

};