


function checkInclusion(s1: string, s2: string): boolean {
    let result: boolean = false;

    let [s1freq1, s2freq2]: [number[], number[]] = [new Array(26).fill(0), new Array(26).fill(0)];
    
    const getIdx = (letter:string): number => {
        return letter.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    
    const matchArrs = (arr1: number[], arr2: number[]): boolean => {
        console.log(arr1.join(':') , " --- ",  arr2.join(':'))
        return (arr1.join(':') === arr2.join(':'));
    };

    for (let myChar: number = 0; myChar < s1.length; myChar++) {
        s1freq1[getIdx(s1[myChar])]++;    
        s2freq2[getIdx(s2[myChar])]++;
    }
    
    for (let i = s1.length; i < s2.length; i++) {
        if (matchArrs(s1freq1, s2freq2)) {
            return true;
        }
        
        s2freq2[getIdx(s2[i])]++;
        s2freq2[getIdx(s2[i-s1.length])]--;

    }

    return false;
};


let s1:string = 'adc';
let s2:string  = 'dcda';

console.log(checkInclusion(s1, s2));