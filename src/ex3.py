FILE='./input/3.txt'
# FILE='./input/11.txt'

def parse_input(file):
    with open(file) as f:
        datas = []
        for line in f:
            datas.append(line.strip())
    return datas

test = parse_input(FILE)

s1 = 0

for i in range(len(test)):
    item = test[i]
    res_first = item[0:len(item)//2]
    res_second = item[len(item)//2 if len(item)%2 == 0 else ((len(item)//2)+1):]

    match = ""

    for r in res_first:
        if r in res_second:
            match = r

    if match.lower() == match:
        s1 += ord(match) - 96
    else:
        s1 += ord(match) - 38

print(s1)

s2 = 0

for i in range(int(len(test) / 3)):
    i = i * 3
    l1 = test[i]
    l2 = test[i + 1]
    l3 = test[i + 2]

    match = ""
    for r in l1:
        if r in l2 and r in l3:
            match = r

    
    if match.lower() == match:
        s2 += ord(match) - 96
    else:
        s2 += ord(match) - 38


print(s2)
