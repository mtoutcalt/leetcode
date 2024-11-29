## Problem Title: Sum of Digits in a String


### Description:
Given a string s consisting of lowercase English letters and digits, write a function to calculate and return the sum of all digits present in the string.


### Examples

Input: s = "a1b2c3"
Output: 6

Explanation: Sum of digits is 1 + 2 + 3 = 6


Input: s = "abc"
Output: 0

Explanation: There are no digits in the string.


#### Constraints:
1 <= s.length <= 100
s consists of lowercase English letters and digits.


### Solutions


#### Solution 1 
```
var sumOfDigits = function(s) {
    let sum = 0;
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            sum += parseInt(char);
        }
    }
    return sum;
};
```

* Iterate over each char, check if its between 0 and num, sum the answer


#### Solution 2 
```
var sumOfDigits = function(s) {
    return s.match(/\d/g)?.reduce((sum, digit) => sum + Number(digit), 0) || 0;
};
```
* use regex to match each digit - 'g' means don't just match the first
* if regex doesnt find anything then results in || 0
* use Number() to convert from string to number


#### Solution 3
```
var sumOfDigits3 = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (code >= 48 && code <= 57) { // ASCII codes for '0' to '9'
            sum += code - 48; // Convert ASCII code to actual number
        }
    }
    return sum;
};
```
* charCodeAt() returns the ASCII code - and digits 0 to 9 are code 48 to 57
* to subtract and get the actual number you need to subtract by 48 since thats when it starts


#### Solution 4
```
var sumOfDigits = function(s) {
    return s.split('')
            .filter(char => char >= '0' && char <= '9')
            .reduce((sum, digit) => sum + Number(digit), 0);
};
```

```
var sumOfDigits = function(s) {
    return s.replace(/\D/g, '')
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);
};

```

* split string into array of chars
* filter out anything thats not a digit



* Big O -----> 
    * Time ---> O(n) since it iterates through every character once
    * Space ---> O(1) since fixed number of vars -- sum and char
        * solution 2 may use more space since its making multiple arrays
        * solution 3 may use the least amount of space



## RUST


#### Solution 1
```
fn sum_of_digits(s: &str) -> i32 {
    s.chars()
     .filter_map(|c| c.to_digit(10))
     .map(|d| d as i32)
     .sum()
}

fn main() {
    let s = "a1b2c3";
    println!("{}", sum_of_digits(s)); // Output: 6
}

```
* input is string and output is 32 bit int
* chars() converts into char iterator
* convert c to digit with base 10 which returns Some(digit) or None
* converting to i32 
* filter_map is an iterator adapter that combines map and filter -> None are filtered out


#### Solution 2
```
fn sum_of_digits(s: &str) -> i32 {
    let mut sum = 0;
    for c in s.chars() {
        if let Some(digit) = c.to_digit(10) {
            sum += digit as i32;
        }
    }
    sum
}
```
* mutable sum with for loop
* chars() handles Unicode but to_digit(10) only does ASCII