const decrypt = (code: number[], k: number): number[] => {
    let result: number[] = new Array<number>(code.length).fill(0);

    if (k > 0) decryptPosk(code, k)
    else if (k < 0) decryptNegk(code, k)

    return result;
};

const decryptNegk = (code: number[], k: number): number[] => {
    let result: number[] = new Array<number>(code.length).fill(0);

    let [l, r]: [number, number] = [code.length-1,code.length-1];
    let decryptedNum: number = 0;

    for (; r >= code.length+k; r--) {
        decryptedNum += code[r];
    }

    
    let idx = r;
    for (; r >= k; r--, idx--, l--) {
        if (r === -1) idx = code.length-1; 
        decryptedNum += code[idx];
        decryptedNum -= code[l];
        result[l] = decryptedNum;
    }
    return result;
}

const decryptPosk = (code: number[], k: number): number[] => {
    let result: number[] = new Array<number>(code.length).fill(0);

    let [l, r]: [number, number] = [1,1];
    let decryptedNum: number = 0;

    for (; r <= k; r++) {
        decryptedNum += code[r];
    }

    result[0] = decryptedNum;

    let idx: number = r;
    for (; l < code.length; r++, idx++, l++) {
        if (r === code.length) {
            idx = 0; // reset index to start of the array when we go out of bounds on the right. 
        }

        decryptedNum += code[idx] - code[l];

        result[l] = decryptedNum;
    }
    return result;
}



let tst_code = [5,7,1,4], tst_k = 3;
console.log(decryptPosk(tst_code, tst_k));

let tst_code1 = [2,4,9,3], tst_k1 = -2;
console.log(decryptNegk(tst_code1, tst_k1));
//[12,5,6,13]