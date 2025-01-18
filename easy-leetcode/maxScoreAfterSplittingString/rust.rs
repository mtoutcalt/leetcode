fn max_score(s: String) -> i32 {
    let mut zero_count = 0;
    let mut one_count = s.chars().filter(|&c| c == '1').count() as i32; //pass c by reference and cast usize to i32
    let mut max_score = 0;

    for (i, c) in s.chars().enumerate() {
        if c == '0' {
            zero_count += 1;
        } else {
            one_count -= 1;
        }

        // Only calculate max score if not at the last character
        if i < s.len() - 1 {
            max_score = max_score.max(zero_count + one_count);
        }
    }

    max_score
}

fn main() {
    let s = "011101".to_string(); //"011101" is a borrowed string which means it is immutable and lives in the stack as a pointer whereas "011101".to_string() is an owned string which means it is mutable and lives in the heap.
    let result = max_score(s);
    println!("Max Score: {}", result); // Example usage
}




// Rust emphasizes explicitness to avoid hidden costs or confusion about what the program is doing. 
// Allocating a String from a &str requires copying data from the stack (or binary) to the heap, which is a non-trivial operation. 
// By requiring you to explicitly call .to_string(), Rust ensures you understand and control when these conversions happen.
//In short, "011101" is indeed a string slice (&str), but it isn't the same as an owned String. You need .to_string() to explicitly create a heap-allocated, growable String.


//In Rust, borrowing means temporarily using data owned by someone else without taking ownership of it.
// In the case of string literals, the data is owned by the binary itself, and string literals are immutable.
// Every piece of data in Rust has a single owner, which determines how long the data lives.
// String literals are stored in the binary itself, so they have a 'static lifetime, meaning they live for the entire duration of the program.
// When the owner goes out of scope, the data is cleaned up (dropped).
// Borrowing allows you to access or use the data without taking ownership, meaning the original owner is still responsible for it.
// In the case of string literals, you can borrow them as &str, which is a reference to the data without owning it.
// Immutable borrowing allows you to read the data, but you can't modify it.
// the other type is mutable borrowing, which allows you to modify the data but only if no other references are active. to avoid race conditions