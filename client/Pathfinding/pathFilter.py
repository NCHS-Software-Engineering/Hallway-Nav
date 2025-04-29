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

def initiate(node_map):
    try:
        with open('classes.json', 'r') as f:
            all_classes = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        all_classes = []

    try:
        with open('client/src/Cord/path3.json', 'r') as f:
            floor_classes = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        print("Could not load path3.json")
        return

   

    floor = all_classes[2]  # Choose floor

    for class_id in floor:
        current_paths = []  # Resets for next class id
        for path in floor_classes:
            if path and path[-1] == class_id: # Checks if path is empty and access last item
                current_paths.append(path)

        if current_paths: # Checks if there are any content
            print(f"\nPaths to destination {class_id}:") # Debug for destination
            for p in current_paths: #Prints out the paths in a list
                print(p) #Checks
            process(current_paths)

               
def process(current_paths):
    try:
        with open('classes.json', 'r') as f:
            all_classes = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        all_classes = []

    
    if len(current_paths) == 1:
         all_classes.append(current_paths)
         with open("thirdFilter.json", "w") as aw:
            json.dump(all_classes, aw)
    else:
        for path in current_paths:
            #Start calculating distance
            print()







def main():
    csv_file = "client/src/Cord/p3.csv"  # Changed backslash to forward slash for better compatibility (can adjust name for file selection)
    reader = CSVReader(csv_file)

    #print("Node Map:", reader.node_map)
    
    initiate(reader.node_map)  # Pass node_map to initiate()


if __name__ == "__main__":
    main()
    
