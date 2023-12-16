/**
 * @param {number[]} nums
 * @return {number[]}
 */
// todo: solve this problem with o(n) space

const prefixSum =(nums)=> {
    let leftSum = 0;
    let sumleftArray = []; 
    for (let i=0; i<nums.length; i++) {
        leftSum += nums[i];
        sumleftArray[i] = leftSum;
    }

    console.log(sumleftArray);
}

prefixSum([1,2,3,4])

const prefixProduct =(nums)=> {
    let n = nums.length;
    let pre = []; 
        pre[0] = 1;
    let suff = []; 
        suff[n-1] = 1;

    for(let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] * nums[i - 1];
    }

    for (let i=n-2; i>= 0; i--) {
        suff[i] = suff[i + 1] * nums[i + 1];
    }

    console.log(`prefix= ${pre} \n suffix = ${suff}`)
}

const prefixProduct2 =(nums)=> {
    let n = nums.length;
    
    let [leftProduct, rightProduct] = [1,1];
    let [pre, suff] = [[],[]];


    for(let i = 0; i < n; i++) {
        
        pre[i] = leftProduct; 
        leftProduct *= nums[i]
    }

    for (let i=n-1; i>= 0; i--) {
        
        suff[i] = rightProduct;
        rightProduct *= nums[i];
    }

    return [pre, suff];
}




const productExceptSelf = (nums) => {
    let [a,b] = prefixProduct2(nums);
    let answer = [];
    for (let i=0; i< nums.length; i++) {
        answer[i] = a[i]*b[i];
    }

    return answer;
}

console.log(productExceptSelf([1,2,3,4]))


console.log(productExceptSelf([-1,1,0,-3,3]))