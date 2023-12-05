const rotate = (nums, k) => {
    let rotations = k;
    let start = nums.length - k;


    if (k > nums.length) {
        // logic is to see how array.lens fit in k. remainder is the list that we need to take ffrom the end and push in the front
        // for e.g. if nums.length = 3 and k is 7, we can fit nums.length twice with a remainder of 1
        // then we only need to take the last element and move it to the front
        console.log(nums.length, k, k % nums.length);
        rotations = k % nums.length;
        start =  nums.length - rotations;
    }

    let temp = nums.splice(start, rotations).reverse();


    
    while (temp.length) {
        nums.unshift(temp.pop());
    }
    
}

const rotateNotEfficient = (nums, k) => {
    
    let start = nums.length-k;
    let deleteCount = k;
    
    if (k > nums.length) {
        start = nums.length - (k % nums.length);
        deleteCount = nums.length;
    }
    
    let mySegment = nums.splice(start, deleteCount);
    console.log("segment: ", mySegment);

    
}


// tests
nums = [1,2,3,4,5]; 
k = 2;

rotate(nums, k);
console.log(nums);

nums = [1,2,3]; 
k = 4;
//rotate(nums, k);
//console.log(nums);


nums = [1,2,4,5,6,7,8]; 
k = 3;
//rotate(nums, k);
//console.log(nums);

