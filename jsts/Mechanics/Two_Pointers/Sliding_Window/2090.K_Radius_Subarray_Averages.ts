const getAverages= (nums: number[], k: number): number[] => {

    

    let ans: number[] = new Array<number>(nums.length).fill(-1);
    let i: number = 0;
    let window: number = (k*2)+1;
    let sum: number = 0;
 
    
    if (k > nums.length) return ans;

    for (; i < k; i++) {
        sum += nums[i];

        
        if (i < k) {
            ans[i] = (-1);
        }    
    }

    for (; i < nums.length; i++ ) {
        sum += nums[i];
        sum -= (nums[i-window]??0);

        if (i >= (k*2)) ans[i-k] = Math.floor(sum/window);
    }
 

    return ans;
}


const getAveragesCanonical = (nums: number[], k: number): number[] => {
    const n = nums.length;
    const window = 2 * k + 1;
    const ans = new Array(n).fill(-1);
    if (n < window) return ans;

    let sum = 0;
    for (let i = 0; i < window; i++) sum += nums[i];
    ans[k] = Math.floor(sum / window);

    for (let i = window; i < n; i++) {
        sum += nums[i] - nums[i - window];
        ans[i - k] = Math.floor(sum / window);
    }
    return ans;
};

const getAverages_brute= (nums: number[], k: number): number[] => {
    let ans: number[] = new Array<number>();

    let i: number = 0;
    let sum: number = 0;

    // uptill K
    for (; i < ((k > nums.length)?nums.length:k); i++) {
        ans.push(-1);
        sum += nums[i];
    }

    
    for (; i < (nums.length-k); i++) {
        if (k > nums.length) break;

        sum += nums[i];
        let j = i+1;
        let temp: number = sum;

        while (j <= (i+k)) {
            temp += nums[j];
            j++;
        }
        sum -= nums[i-k];
        
        let avg: number = Math.floor(temp/((2*k)+1));
        ans.push(avg);
    }

    for (; i < nums.length; i++) {
        sum += nums[i];
        sum += nums[i-k];
        ans.push(-1);
    }

    return ans;
};


let arr: number[] = [7,4,3,9,1,8,5,2,6]
let target: number = 3;

console.log(getAverages(arr, target));