function recursiveRange(num) {
    let sum = 0;
    function helperMethod(num) {
        if (num > 0) {
            sum = num + helperMethod(num - 1);
        }
        return sum;
    }
    return helperMethod(num);
}
console.log(recursiveRange(10));