/* 
averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/
/* 
3
i
[1, 3, 3, 5, 6, 7, 10, 12, 19]
j
*/
function averagePair(arr, targetValue) {
    if (!arr.length) return console.log(false);
    let i = 0;
    let j = arr.length - 1;
    let sum = 0;
    while (i < j) {
        sum = (arr[i] + arr[j]) / 2;
        if (sum === targetValue) return console.log(true);
        if (sum < targetValue) {
            i++;
        } else {
            j--;
        }
    }
    /* if (!arr.length) return console.log(false);
    let i = 0;
    let j = Math.floor(arr.length / 2);
    let sum = 0;
    while (i < j) {
        j = Math.floor(arr.length / 2);
        sum = (arr[i] + arr[j]) / 2;
        if (sum === targetValue) return true;
        if (sum < targetValue) {
            arr.splice(0, j);
        } else if (sum > targetValue) {
            arr.splice(j);
        }
    } */

    /* while (i < j) {
        sum = (arr[i] + arr[j]) / 2;
        if (sum === targetValue) return console.log(true);
        if (sum < targetValue) {
            i = j;
            j = Math.floor((arr.length - 1 - i) / 2);
        } else if (sum > targetValue) {
            j = Math.floor((j + 1) / 2);
        }
    }*/
    return console.log(false);
}
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false