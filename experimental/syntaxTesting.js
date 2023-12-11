// test destructuring
const fn1 = txt => {
    return 1
}
let [x,y] = [fn1('hello'), fn1('world')]
console.log(`destructing test of x = ${x}, y = ${y}`);


// another destructing.
const restock = {restock:true};
const sufficient= {restock:false};

const quantity = 6;

if (quantity > 6) {
    console.log(restock);
} 
else {
    console.log(sufficient);
}


// arrow functions and callbacks
let arr = [7,1,2,3,4,5];

let temp = Array.from(arr);
arr.sort((a,b)=>b-a)
console.log(arr, ' and ', temp)

arr.forEach(element => {
    console.log(element);
});

// reduce
let candies = [4,2,1,1,2]

console.log(candies[-1])

const max = candies.reduce((a, b) => (a > b ? a : b));


console.log(`max = ${max}`);

let sentence = "the quick brown fox".split('');

console.log(`sentence: ${sentence}`)

let letters = (['x','a','f','e','v','t','o','u','z','x']).reduce((a,b)=> {
    console.log(`reduce: ${a},${b}`)
    
    let vowelSet = new Set(['a','e','i','o','u']);
    if (!vowelSet.has(a)) {
        a = null;
    }

    return a;
} );

console.log(`letters: ${letters}`);



let maxCandies = Math.max(...candies);
console.log("destructured max..", maxCandies);