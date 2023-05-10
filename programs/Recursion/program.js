function fib(num) {
    if (num === 1 || num === 2) return 1;
    let arr = [1, 1];
    let i = 0, j = 1;
    function helperMethod(num) {
        if (arr.length < num) {
            arr.push(arr[i] + arr[j]);
            i++;
            j++;
            return helperMethod(num);
        }
        return arr[j];
    }
    return helperMethod(num);
}
console.log(fib(35));