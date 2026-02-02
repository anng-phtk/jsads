const multiply = (num1: string, num2: string): string => {


    let [n1Len, n2Len]:[number, number] = [num1.length, num2.length];
    let temp: number[] = new Array(n1Len+n2Len).fill(0); // len of a multipled number is the sum len of its digits 
    
    console.log(temp);

    let n1Digit: number = 0;
    let multiple = 0;
    let final = 0;
    for (let i: number = n1Len-1; i >=0 ; i--) {
        multiple = (multiple === 0)? 1: multiple*10; 
        n1Digit = multiple * (num1.charCodeAt(i) - '0'.charCodeAt(0)) ;
        
        let x = 0;
        let n2Digit: number = 0;
        for (let j: number = 0; j < n2Len; j++) {
            n2Digit = (n2Digit*10) + (num2.charCodeAt(j) - '0'.charCodeAt(0));      
            
        }    

        final += n2Digit*n1Digit;
        console.log(final);
        
    }

    console.log(final)
    
    return String(final);
};

multiply('123', '456');