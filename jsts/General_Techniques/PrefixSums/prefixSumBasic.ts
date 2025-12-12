class NumArray {
    private prefix: number[] = new Array<number>();
    constructor(nums: number[]) {

        for (let i: number = 0; i < nums.length; i++) {
            this.prefix[i] = (this.prefix[i-1]??0) + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        let ans: number = this.prefix[right]-(this.prefix[left-1]??0);
        return ans;
    }
}