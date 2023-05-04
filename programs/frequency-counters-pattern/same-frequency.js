/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/


function sameFrequency(int1, int2) {
    // create two objs and take the occurence of the digits
    // function to return obj 
    // convert num to str and split it and insert it to object checking the frequency
    // check the object equality by Json parse and stringify
    // return true or false
    let int1Obj = returnObj(int1);
    let int2Obj = returnObj(int2);
    return console.log(int1Obj === int2Obj);
}

function returnObj(num) {
    let numArr = String(num).split('');
    let obj = {};
    for (const item of numArr) {
        obj[item] = ++obj[item] || 1;
    }
    return JSON.stringify(obj);
}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false