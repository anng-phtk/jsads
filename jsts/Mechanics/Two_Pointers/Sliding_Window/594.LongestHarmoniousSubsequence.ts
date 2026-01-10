function findLHS(nums: number[]): number {
    const freq = new Map<number, number>();

    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1) // if freq.get(num) is undefined first appeared return 0
    }
    let longest = 0;
    for (const[ value, count ] of freq) {
        if (freq.has(value + 1)) {
            const length = count + freq.get(value + 1)!;
            if (length > longest) {
                longest = length;
            }
        }
    }
    return longest;
};