# Problem Title: Remove Vowels from a String

**Difficulty:** Easy

---

## Description

Given a string `s`, write a function to remove all vowels from it and return the resulting string. Vowels in English are `'a', 'e', 'i', 'o', 'u'`, and they can be either lowercase or uppercase.

**Input:**  
`s = "Hello World"`  
**Output:**  
`"Hll Wrld"`

**Input:**  
`s = "JavaScript is Awesome"`  
**Output:**  
`"JvScrpt s wsm"`

---

## Constraints

- `1 <= s.length <= 1000`
- `s` consists of English letters (both uppercase and lowercase) and spaces.

---

## Solution

```javascript
function removeVowels(s) {
    // 1 <= s.length <= 1000
    // s consists of English letters (both uppercase and lowercase) and spaces.

    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

    let result = '';
        
    for (let char of s) {
        if (!vowelsSet.has(char.toLowerCase())) {
            result += char;
        }
    }

    return result;
}
```

- Iterate through each character and build a new string by excluding any vowels.

---

## Test Cases

```javascript
console.log(removeVowels("Hello World"));         // Output: "Hll Wrld"
console.log(removeVowels("JavaScript is Awesome")); // Output: "JvScrpt s wsm"
console.log(removeVowels("AEIOU aeiou"));           // Output: " "
console.log(removeVowels("LeetCode"));              // Output: "LtCd"
console.log(removeVowels(""));                      // Output: ""
```

---

## Improvements

- Use **Regex**: Matching vowels with regex can leverage JavaScript engine optimizations.
- Avoid **String Concatenation**: Strings are immutable, and repeated concatenation creates new strings and incurs garbage collection overhead. Using arrays and `.join()` is more efficient.

---

## Improved Solutions

### Using Regular Expressions

```javascript
function removeVowels(s) {
    return s.replace(/[aeiou]/gi, ''); // 'i' makes it case insensitive, 'g' applies global matching.
}
```

### Using Array and `.join()`

```javascript
function removeVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const result = [];
    
    for (let char of s) {
        if (!vowels.has(char.toLowerCase())) {
            result.push(char);
        }
    }
    
    return result.join('');
}
```

---

## Benchmark

```javascript
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

// Example Output:
// String Concatenation: 127.54 ms
// Array and Join: 81.88 ms
// Regular Expression: 50.38 ms
```


## Big O Notation

- Time --> O(n) --> though because of immutable string concatenation it's O(n^2) because it must iterate n times but then the concatenate process results in iterating again to copy
- Space --> O(n) ---> if all are no vowels, though string concat approach results in intermediate strings

