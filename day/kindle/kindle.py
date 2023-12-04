FILE='./input/kindle.txt'

def parse_input(file):
    with open(file) as f:
        datas = []
        for line in f:
            datas.append(line.strip())
    return datas

pairs = parse_input(FILE)

books = dict()

title = ""
divider = True
for pair in pairs:
    if divider:
        title = pair
        divider = False
        continue

    if pair == "==========":
        divider = True
        continue

    if pair.startswith("- Your Highlight"):
        continue

    if pair == "":
        continue

    books[title] = books.get(title, []) + [pair]

def format_highlights(highlights):
    result = ""
    for highlight in highlights:
        result += highlight
        result += "\n\n---\n\n"

    return result

# ask user input
print("Available books:")

for i in range(0, len(books)):
    print(f"{i}: {list(books.keys())[i]}")

index = input("Enter a book index: ")

selected_book = list(books.keys())[int(index)]

book_highlights = books.get(selected_book)

# write to file and create it if it doesn't exist
with open(f"{selected_book}.md", "w") as f:
    f.write(format_highlights(book_highlights))

