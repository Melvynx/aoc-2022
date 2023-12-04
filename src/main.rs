use std::fs;


fn main() {
    
    let contents = fs::read_to_string("/Users/melvynmalherbe/dev/other/tmp/adventofcode-2022/input/6.t.txt")
        .expect("Should have been able to read the file");

    let mut last_four_char: String = "".to_owned();
    let mut count = 0;

    for c in contents.chars() {
        
        if last_four_char.len() == 14 {
            let mut is_full_unique_chars = true;
            for c2 in last_four_char.chars() {
                let test = last_four_char.chars().filter(|x| *x == c2).count();
                if test != 1 {
                    is_full_unique_chars = false;
                }
            }

            if is_full_unique_chars {
                println!("{} is unique with count {}", last_four_char, count);
                break;
            }
            last_four_char.remove(0);
        }
        count += 1;
        last_four_char.push(c);
    }
}
