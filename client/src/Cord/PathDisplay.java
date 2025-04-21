import java.util.Scanner;
import java.util.List;
import java.io.File;

class PathDisplay
{
    private String finish;
    private String start = "0";
    public List<String> path;
    private Scanner paths;
    public static void main(String [] args)
    {
        PathDisplay test = new PathDisplay("0100");
        System.out.println(test.Find());
    }
    public PathDisplay(String end)
    {
        finish = end;
        String floor = finish.substring(1,1);
        paths = new Scanner(new File("test" + floor + ".json"));
    }

    public List<String> Find()
    {
        paths.next("[");
    }
}