use std::fs;
use std::io;

fn total_distance_between_lists(left_list: &mut [i32], right_list: &mut [i32]) -> i32 {
    if left_list.len() != right_list.len() {
        panic!("Lists must be of the same length.");
    }

    left_list.sort_unstable();
    right_list.sort_unstable();

    let mut total_distance = 0;
    for i in 0..left_list.len() {
        total_distance += (left_list[i] - right_list[i]).abs();
    }

    total_distance
}

fn main() -> io::Result<()> {
    // Read the entire file as a single string
    let data = fs::read_to_string("input.txt")?;

    let mut left_list = Vec::new();
    let mut right_list = Vec::new();

    for line in data.lines() {
        // Split by whitespace to separate the two columns
        let parts: Vec<&str> = line.trim().split_whitespace().collect();
        if parts.len() == 2 {
            let left_val: i32 = parts[0].parse().expect("Left value is not a valid integer");
            let right_val: i32 = parts[1].parse().expect("Right value is not a valid integer");

            left_list.push(left_val);
            right_list.push(right_val);
        } else if !line.trim().is_empty() {
            panic!("Each line must contain exactly two values");
        }
    }

    let answer = total_distance_between_lists(&mut left_list, &mut right_list);
    println!("Total Distance: {}", answer);

    Ok(())
}
