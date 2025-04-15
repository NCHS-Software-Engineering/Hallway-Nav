import java.util.Scanner;
import java.util.List;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
class PathDisplay
{
    private String finish;
    public List<String> path;
    private Scanner paths;
    private Scanner points;
    public static void main(String [] args)
    {
        PathDisplay test = new PathDisplay("0100");
        System.out.println(test.Find());
    }
    public PathDisplay(String end)
    {
        finish = end;
        String floor = finish.substring(1,1);
        points = new Scanner(new File("test" + floor + ".csv"));
        paths = new Scanner(new File("test" + floor + ".json"));
    }

    public List<String> Find()
    {
        
    }
}