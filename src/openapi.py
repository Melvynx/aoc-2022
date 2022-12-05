FILE='./input/4.txt'

def parse_input(file):
    with open(file) as f:
        datas = []
        for line in f:
            datas.append(line.strip())
    return datas

pairs = parse_input(FILE)

# Counter for the number of fully-contained assignments
count = 0

# Iterate over each pair of assignments
for pair in pairs:
  # Split the pair into two assignments
  assignment1, assignment2 = pair.split(",")

  # Parse the start and end of each assignment
  start1, end1 = map(int, assignment1.split("-"))
  start2, end2 = map(int, assignment2.split("-"))

  # Check if one assignment fully contains the other
  if (start1 <= start2 <= end2 <= end1) or (start2 <= start1 <= end1 <= end2):
    # If this is the case, increment the counter
    count += 1

# Print the result
print(f"Number of fully-contained assignments: {count}")


