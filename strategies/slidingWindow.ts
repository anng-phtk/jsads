const slidingWindow = (arr:number[], k:number):number[] => {
    // exit condition

    let [trail, lead]:[number, number] = [0,1];



    for (let idx in arr) {
        // make window wider when some condition is not met
        // sample condition here is to have a sub array of numbers less than k
        if (arr[lead] > k) {
            lead++;
        }

        // reduce the window
        if (arr[trail] < k) {
            trail++;
        }
    }

    return [];
}

console.log(slidingWindow([1,2,3,4,5], 4));