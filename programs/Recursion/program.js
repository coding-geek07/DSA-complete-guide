function flatten(arr) {
    let flattenArr = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            flattenArr = flattenArr.concat(flatten(item));
        } else {
            flattenArr.push(item);
        }
    }
    return flattenArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));