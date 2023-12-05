// test destructuring


const fn1 = txt => {
    return 1
}

let [x,y] = [fn1('hello'), fn1('world')]
console.log(`destructing test of x = ${x}, y = ${y}`);
