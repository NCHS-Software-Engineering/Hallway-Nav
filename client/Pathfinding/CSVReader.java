import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CSVReader {
    public static void main(String[] args) {
        String csvFile = "C:\\Users\\dkozlowski\\Documents\\GitHub\\Hallway-Nav\\client\\Pathfinding\\p3.csv";
        String line;
        String delimiter = ",";

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {
            while ((line = br.readLine()) != null) {
                String[] values = line.split(delimiter);
                // Access the values using their index
                String info = ("ID: " + values[0] + ", Type " + values[1] + ", Connections: "+ values[4]);
                int connections = Integer.parseInt(values[4]);
                for(int i = 1; i <= connections; i++){
                    info+= ", connection " + i + ": " + values[4+i];
                }

                System.out.println(info);
                }

                }
            
         catch (IOException e) {
            e.printStackTrace();
        }
    }
}