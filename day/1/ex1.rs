use std::fs;


fn main() {
    
    let contents = fs::read_to_string("/Users/melvynmalherbe/dev/other/tmp/adventofcode-2022/input/1.txt")
        .expect("Should have been able to read the file");

    let split = contents.split("\n\n");

    // boucle
    let mut result: Vec<i32> = split.map(|s| {
        let uu = s.split("\n");
        let mut sum = 0;

        for u in uu {
            if u.len() == 0 {
                continue;
            }
            sum += u.parse::<i32>().unwrap();
        }
        println!("sum: {}", sum);
        return sum;
    }).collect();

    result.sort();

    let mut max = 0;
    for i in 0..3 {
        max += result.last().unwrap();
        result.pop();
    }

    println!("max: {}", max);
}
