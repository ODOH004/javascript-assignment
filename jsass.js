// string manuplation
// Reverse a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    
    // Examples
    console.log(reverseString("hello")); // Output: "olleh"
    console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
    
    // count characters
    function countCharacters(str) {
        return str.length;
    }
    
    // Examples
    console.log(countCharacters("hello")); // Output: 5
    console.log(countCharacters("JavaScript")); // Output: 10
    
    // capitalize words
    function capitalizeWords(sentence) {
        return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    
    // Examples
    console.log(capitalizeWords("hello world")); // Output: "Hello World"
    console.log(capitalizeWords("javascript is awesome")); // Output: "Javascript Is Awesome"

    // Array Functions
    // find Max and Mini
    function findMaximum(arr) {
        return Math.max(...arr);
    }
    
    function findMinimum(arr) {
        return Math.min(...arr);
    }
    
    // Examples
    console.log(findMaximum([1, 2, 3, 4, 5])); // Output: 5
    console.log(findMinimum([1, 2, 3, 4, 5])); // Output: 1
    // sum of Array
    function sumArray(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }
    
    // Examples
    console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
    console.log(sumArray([10, 20, 30])); // Output: 60
    // filter Array    
    function filterArray(arr, condition) {
        return arr.filter(condition);
    }
    
    // Examples
    console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); // Output: [4, 5]
    console.log(filterArray([10, 20, 30, 40, 50], num => num <= 30)); // Output: [10, 20, 30]
// mathematical function 
// factorial
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0) return 1; // 0! is 1
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Examples
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
// prime number check
function isPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    if (n <= 3) return true; // 2 and 3 are prime numbers
    if (n % 2 === 0 || n % 3 === 0) return false; // Divisible by 2 or 3
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Examples
console.log(isPrime(5)); // Output: true
console.log(isPrime(10)); // Output: false

// fibonacci sequence
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

// Examples
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
