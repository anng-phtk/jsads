var maxSumSubarray = function (arr, k) {
    var answer = 0;
    var maxAnswer = 0;
    var _a = [0 - k, 0], trail = _a[0], lead = _a[1];
    while (lead < arr.length) {
        // maintain a distance of k between two pointers
        if (trail < 0) {
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
};
var maxSumSubarray2 = function (arr, k) {
    var answer = 0;
    var maxAnswer = 0;
    for (var i = 0; i < k; i++) {
        answer += arr[i];
    }
    for (var i = k; i < arr.length; i++) {
        maxAnswer += arr[k] - arr[k - 1];
        answer = Math.max(answer, maxAnswer);
    }
    return answer;
};
var exampleArray = [1, 2, 3, 4, 5];
var exampleK = 3;
console.log(maxSumSubarray(exampleArray, exampleK));
