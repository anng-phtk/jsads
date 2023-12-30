const maxSumSubarray = (arr: number[], k: number): number => {
    
    let answer:number = 0;
    let maxAnswer:number = 0;

    let [trail, lead]:[number, number] = [0-k,0];
    while (lead < arr.length) {
        // maintain a distance of k between two pointers
        if (trail < 0 ) {
            answer += arr[lead];
        }
        else {
            maxAnswer += arr[lead] - arr[trail];
            maxAnswer = Math.max(maxAnswer, answer);
        }

        
        trail++;
        lead++;
    }

    return maxAnswer;
}


const maxSumSubarray2 = (arr: number[], k: number): number => {
    let answer:number = 0;
    let maxAnswer:number = 0;


    for (let i=0;i<k; i++) {
        answer += arr[i];
    }

    for (let i=k; i< arr.length; i++) {
        maxAnswer += arr[k]-arr[k-1];
        
        answer = Math.max(answer, maxAnswer);
    }

    return answer;
}

const exampleArray = [1, 2, 3, 4, 5];
const exampleK = 3;

console.log(maxSumSubarray(exampleArray, exampleK));