/**
 * @param {number[]} height
 * @return {number}
 */


var maxAreaBruteForce = height => {
    let maxVolume = 0
    for (i=0; i<height.length; i++) {
        for (j=1; j<height.length; j++) {
            let storageHeight = Math.min(height[i], height[j]);
            let storageLength = j-i;
            
            maxVolume = Math.max(maxVolume, (storageHeight*storageLength));
        }   
    }
    return maxVolume;
}


var maxArea = function(height) {
    let [ptr1,ptr2] = [0,height.length-1];
    let maxVolume = 0;

    while (ptr1 < ptr2){
        let storageHeight = Math.min(height[ptr1], height[ptr2]);
        let storageLength = ptr2-ptr1;
        maxVolume = Math.max(maxVolume, (storageHeight*storageLength));
        
        if (height[ptr1] < height[ptr2]) {
            ptr1++;
        }
        else {
            ptr2--;
        }
    }

    return maxVolume;
};


let m = maxArea([7,8,6,2,5,8,7,3,1]);
//m = maxAreaBruteForce([2,3,4,5,18,17,6]);
console.log(m);