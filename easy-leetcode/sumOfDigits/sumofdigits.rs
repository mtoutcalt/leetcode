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
