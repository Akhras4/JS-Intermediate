
/**
 * The function calculates the nth number in the Fibonacci sequence.
 * @param n - n is the number of terms in the Fibonacci sequence that we want to calculate. In this
 * case, n is set to 7.
 * @returns the 7th number in the Fibonacci sequence, which is 13.
 */
function fibonacci (n) {
    if (n <= 0) {
        return "n should be a positive integer.";
    } else if (n === 1 || n === 2) {
        return 1;
    }

    let first = 1;
    let second = 1;
    for (let i = 3; i <= n; i++) {
        let next = first + second;
        first = second;
        second = next;
    }
    return second;
}
alert( fibonacci(7));