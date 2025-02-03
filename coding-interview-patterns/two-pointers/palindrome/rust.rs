fn is_palindrome(s: &str) -> bool {
    let s = s.chars().collect::<Vec<char>>();
    let mut left = 0;
    let mut right = s.len() as isize - 1;

    while left < right {
        while left < right && !s[left as usize].is_alphanumeric() {
            left += 1;
        }
        while left < right && !s[right as usize].is_alphanumeric() {
            right -= 1;
        }
        if s[left as usize].to_ascii_lowercase() != s[right as usize].to_ascii_lowercase() {
            return false;
        }
        left += 1;
        right -= 1;
    }

    true
}

fn main() {
    println!("{}", is_palindrome("A man, a plan, a canal: Panama")); // true
    println!("{}", is_palindrome("race a car")); // false
}
