FILE='./input/8.txt'

def parse_input(file):
    with open(file) as f:
        datas = []
        for line in f:
            datas.append(line.strip())
    return datas

pairs = parse_input(FILE)
pairs = [[int(letter) for letter in x] for x in pairs]

def increment_x(x, y):
    return x + 1, y

def decrement_x(x, y):
    return x - 1, y

def increment_y(x, y):
    return x, y + 1

def decrement_y(x, y):
    return x, y - 1

def check_tree(height, y, x, trees, callback):
    tx, ty = callback(x, y)
    max_y = len(trees)
    max_x = len(trees[0])
    if tx == -1 or tx == max_x or ty == -1 or ty == max_y:
        return True

    
    tested_value = trees[tx][ty]
    if tested_value >= height:
        return False
    
    return check_tree(height, tx, ty, trees, callback)


def find_visible_trees(trees):
    visible_tree = 0
    max_x = len(trees) - 1
    max_y = len(trees[0]) - 1
    for y in range(0, len(trees)):
        for x in range(0, len(trees[y])):
            if y == 0 or y == max_y or x == 0 or x == max_x:
                visible_tree += 1
                continue
            
            curr = trees[y][x]

            if check_tree(curr, y, x, trees, increment_x):
                visible_tree += 1
                continue
            if check_tree(curr, y, x, trees, decrement_x):
                visible_tree += 1
                continue
            if check_tree(curr, y, x, trees, increment_y):
                visible_tree += 1
                continue
            if check_tree(curr, y, x, trees, decrement_y):
                visible_tree += 1
                continue
    
    return visible_tree


def check_tree_scenic(height, x, y, trees, callback, score):
    tx, ty = callback(x, y)
    max_y = len(trees)
    max_x = len(trees[0])

    if tx == -1 or tx == max_x or ty == -1 or ty == max_y:
        return score

    
    tested_value = trees[tx][ty]
    if tested_value >= height:
        return score + 1
    
    return check_tree_scenic(height, tx, ty, trees, callback, score + 1)


def find_visible_trees_scenic(trees):
    max_y = len(trees) - 1
    max_x = len(trees[0]) - 1
    max_v = 0
    for x in range(0, len(trees)):
        for y in range(0, len(trees[x])):
            if x == 0 or x == max_x or y == 0 or y == max_y:
                continue
            
            curr = trees[x][y]

            score = 1
            score *= check_tree_scenic(curr, x, y, trees, increment_x, 0) or 1
            score *= check_tree_scenic(curr, x, y, trees, decrement_x, 0) or 1
            score *=  check_tree_scenic(curr, x, y, trees, increment_y, 0) or 1
            score *=  check_tree_scenic(curr, x, y, trees, decrement_y, 0) or 1

            if score > max_v:
                max_v = score

    return max_v


print("1", find_visible_trees(pairs))
print("2", find_visible_trees_scenic(pairs))