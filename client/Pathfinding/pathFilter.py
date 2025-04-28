import json
import csv
from collections import defaultdict

class CSVReader:
    def __init__(self, file):
        self.node_map = {}

        try:
            with open(file, mode='r', newline='', encoding='utf-8') as csvfile:
                reader = csv.reader(csvfile)
                for line in reader:
                    if len(line) < 6:
                        print(f"Skipping invalid line: {','.join(line)}")
                        continue

                    node_id = line[0].strip()
                    node = [value.strip() for value in line[:5]]
                    node += [value.replace('"', '').strip() for value in line[5:]]

                    self.node_map[node_id] = node

        except IOError as e:
            print(f"IO error: {e}")

       # print("Loaded Nodes:", self.node_map.keys())

def initiate(node_map):  # Accept the actual node map
    try:
        with open('classes.json', 'r') as f:
            all_classes = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        all_classes = []

    current_classes = []
    try:
        with open('client\src\Cord\path3.json', 'r') as f:
            floor_classes = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        floor_classes = []
        
    with open("classes.json", "w") as aw:
        json.dump(all_classes, aw)

        floor = all_classes[2]

        print(f"Floor: {floor}")
    print(floor_classes)
    for classes in floor:
        for paths in floor_classes:
           if paths[len(paths)-1] ==  classes:
               print("n")
               
               
                






def main():
    csv_file = "client/src/Cord/p3.csv"  # Changed backslash to forward slash for better compatibility (can adjust name for file selection)
    reader = CSVReader(csv_file)

    #print("Node Map:", reader.node_map)
    
    initiate(reader.node_map)  # Pass node_map to initiate()


if __name__ == "__main__":
    main()
    
