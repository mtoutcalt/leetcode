function removeVowelsConcat(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let result = '';
    for (let char of s) {
        if (!vowels.has(char.toLowerCase())) {
            result += char;
        }
    }
    return result;
}

function removeVowelsArray(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const result = [];
    for (let char of s) {
        if (!vowels.has(char.toLowerCase())) {
            result.push(char);
        }
    }
    return result.join('');
}

function removeVowelsRegex(s) {
    return s.replace(/[aeiou]/gi, '');
}

function benchmark(func, s) {
    const start = performance.now();
    func(s);
    const end = performance.now();
    return end - start;
}

const largeString = 'Hello World! '.repeat(100000);

console.log('String Concatenation:', benchmark(removeVowelsConcat, largeString), 'ms');
console.log('Array and Join:', benchmark(removeVowelsArray, largeString), 'ms');
console.log('Regular Expression:', benchmark(removeVowelsRegex, largeString), 'ms');