
/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    let [left, count, right] = [0,1,1];

    let str = chars[left];

    while (right < chars.length) {
        if (chars[left] == chars[right]) {
            count++;
        }
        else {
            if (count > 1) str+= count;
            str+= chars[right];
            // case where right pointer does not have the same value as left
            count = 1;
        }
        left++;
        right++;
    }

    if (count > 1) str+= count;

    let counter = str.length;
    for (let i in chars) {
        if (str.at(i)){
            chars[i] = str.at(i);
        }
    }

    chars.splice(str.length, chars.length)

    console.log(chars);
};

compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);