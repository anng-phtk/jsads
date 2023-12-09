/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    let result = [];
    let idxOfKidWithMostCandies = 0;
    let compareCandyCountPtr = 0;

    // find the index where the count of existing candies is greatest
    // example [1,4,2,2,1] we should end up with idxofKidWithMostCandies = 1
    while (compareCandyCountPtr < candies.length) {
        if (candies[idxOfKidWithMostCandies] < candies[compareCandyCountPtr]) {
            idxOfKidWithMostCandies = compareCandyCountPtr;
        }
        // move ptr ahead
        compareCandyCountPtr++;
    }

    for (let i=0; i<candies.length; i++) {
        result.push(candies[i]+extraCandies >= candies[idxOfKidWithMostCandies]);
    }


    return result;
}
