function isValid(s) {
    const stack = [];
    
    // Map closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of s) {
        // If it's a closing bracket
        if (char in bracketMap) {
            // the char is a closing bracket - so we're gonna pop and see if this closing should match the latest pushed opening character
            // Check if stack is empty or top doesn't match
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {
            // It's an opening bracket - push to stack
            stack.push(char);
        }
    }
    
    // Stack should be empty if all brackets were matched
    return stack.length === 0;
}

// function isValid(s) {
//     const stack = [];
    
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
        
//         if (char === '(' || char === '[' || char === '{') {
                // push for opening chars
//             stack.push(char);
//         } 
//         else if (char === ')') {
                // char is a closing, first check length before popping, then pop which gets last array item or latest pushed item, and see if it is the matching opening character
//             if (stack.length === 0 || stack.pop() !== '(') return false;
//         } 
//         else if (char === ']') {
//             if (stack.length === 0 || stack.pop() !== '[') return false;
//         } 
//         else if (char === '}') {
//             if (stack.length === 0 || stack.pop() !== '{') return false;
//         }
//     }
    
//     return stack.length === 0;
// }

// Test cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([])"));      // true
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
console.log(isValid("((("));       // false


// ## How It Works - Step by Step

// LIFO - so use STACK -- push when opening char, and pop when closing char, everything should be popped if valid
// For javascript, array type has pop operation

// Let's trace through `"([{}])"`:
// ```
// char    |  action              |  stack after
// --------|----------------------|-------------
// '('     |  push '('            |  ['(']
// '['     |  push '['            |  ['(', '[']
// '{'     |  push '{'            |  ['(', '[', '{']
// '}'     |  pop, check match    |  ['(', '[']  ✓ matches '{'
// ']'     |  pop, check match    |  ['(']       ✓ matches '['
// ')'     |  pop, check match    |  []          ✓ matches '('
//         |  stack is empty      |  return true
// ```

// Now let's trace through `"([)]"` (invalid):
// ```
// char    |  action              |  stack after
// --------|----------------------|-------------
// '('     |  push '('            |  ['(']
// '['     |  push '['            |  ['(', '[']
// ')'     |  pop, check match    |  popped '[' but need '(' ✗
//         |  return false

// Big O Analysis

// Time Complexity: O(n)

// We loop through the string once
// Push/pop operations are O(1)


// Space Complexity: O(n)

// Worst case: all opening brackets, stack size = n
// Example: "(((((("