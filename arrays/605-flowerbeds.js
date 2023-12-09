/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // test conditions
    // is flowerbed more than 3

    for (let i=0; i<flowerbed.length; i++) {
        if (i === 0) {
            // check next
            if (flowerbed[i] === 0 && (flowerbed[i+1] != null && flowerbed[i+1] === 0)) {
                flowerbed[i] = 1;
                n--;
            }
        }
        else if (i === flowerbed.length-1) {
            // check previous 
            if (flowerbed[i] === 0 && (flowerbed[i-1] != null && flowerbed[i-1] === 0)) {
                flowerbed[i] = 1;
                n--;
            }
        } 
        else {
            const prevPlot = flowerbed[i-1];
            const nextPlot = flowerbed[i+1];

            if (prevPlot === 0 && nextPlot === 0 && flowerbed[i]===0) {
                flowerbed[i] = 1;
                n--;
            }

            if (n <= 0) break;
        }

    }
    return (n > 0)? false : true;
};

let flowerbed = [0,0,1,0,1]; let n = 1;

console.log(canPlaceFlowers(flowerbed,n));