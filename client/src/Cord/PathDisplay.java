import java.util.Scanner;
import java.util.ArrayList;
import java.io.File;
import java.io.FileNotFoundException;

class PathDisplay {
    private String finish;
    public ArrayList<String> path;
    private Scanner paths;
    private String current;

    public static void main(String[] args) {
        PathDisplay test = new PathDisplay("0100");
        System.out.println(test.Find());
    }

    public PathDisplay(String end) {
        finish = end;
        String floor = finish.substring(1, 2);
        try {paths = new Scanner(new File("client/src/Cord/test" + floor + ".json"));}
        catch(FileNotFoundException e){System.out.println("client/src/Cord/test" + floor + ".json");}
    }

    public ArrayList<String> Find() {
        path = new ArrayList<String>();
        paths.nextLine();
        while(paths.hasNext())
        {
            current = paths.nextLine();
            current = current.replaceAll("\\s+", "");
            while(true)
            {
                current = paths.nextLine();
                current = current.replaceAll("\\s+", "");
                current = current.replaceAll("\"","");
                current = current.replaceAll(",","");
                if(current.equals("]"))
                    break;
                path.add(current);
            }
            if(path.get(path.size()-1).equals(finish))
            {
                return path;
            }
            else
            {
                while(path.size() > 0)
                {
                    path.remove(path.size());
                }
            }
        }
        return (path);
    }
}