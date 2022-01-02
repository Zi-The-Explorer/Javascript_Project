// Factorial Loop
function factorial(value) {
    let result = 1
    for(let i = 1; i <= value; i++) {
        // result = result * i 
        result *= i 
    }
    return result


}
const rslt = factorial(3)
console.log(rslt)
console.log(1 * 2 * 3) // Hasil sama dengan factorial loop

// Factorial Recursive 
function factorialRecursive(value) {
    if (value === 1) {
        return 1
    } else {
        return value * factorialRecursive(value - 1)
    }
}
console.log(1 * 2 * 3 * 4 * 5)
console.log(factorialRecursive(5))
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive(3)
// 5 * 4 * 3 * factorialRecursive(2)
// 5 * 4 * 3 * 2 * factorialRecursive(1)
// 5 * 4 * 3 * 2 * 1