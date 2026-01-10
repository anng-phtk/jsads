
function atMostofK(nums: number[], goal: number): number {
    let [l,r]: [number, number] = [0,0];

    let prefSum: number = 0;
    let result: number = 0;

    while (r < nums.length) {
        prefSum += nums[r];

        while (prefSum > goal) {
            prefSum -= nums[l]; 
            l++;
        }

        result += r-l+1;
        
        r++;
    }

    return result;
};


console.log(atMostofK([1,0,1,0,1], 2))

console.log(atMostofK([1,0,1,0,1], 1))

console.log(atMostofK([0,0,0,0,0], 0))