import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;

public class CSVReader {
    Map<String, ArrayList<String>> nodeMap = new HashMap<>();
    public CSVReader(String file)
    {
        String csvFile = file;
        String line;
        String delimiter = ",";

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            while ((line = br.readLine()) != null) {
                ArrayList<String> node = new ArrayList<>();
                String[] values = line.split(delimiter);
                // Access the values using their index
                for(int i=0; i<5; i++)
                    node.add(values[i]);

                int connectionNum = Integer.parseInt(values[4]);
                for(int i = 1; i <= connectionNum; i++){
                    node.add(values[4+i]);
                }
                nodeMap.put(node.get(0), node);
                }

                }
            
         catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<String> getPath(String start, String end)
    {
            }
}