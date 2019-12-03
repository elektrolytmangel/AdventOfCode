import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class Three implements AdventOfCode {

    ArrayList<String> inputValues;

    public Three(String path){
        inputValues = loadFile(path);
    }

    @Override
    public ArrayList<String> loadFile(String path) {
        ArrayList<String> wires = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            String line = reader.readLine();
            while (line != null){
                wires.add(line);
                line = reader.readLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return wires;
    }

    public static ArrayList<String> convertCsvToArrayList(String csv) {
        String[] wirePoints = csv.split(",");
        ArrayList<String> oneWire = new ArrayList<>();
        for (int i = 0; i < wirePoints.length; i++){
            oneWire.add(wirePoints[i]);
        }
        return oneWire;
    }

    public ArrayList<String> calculatePositions(ArrayList<String> wire){
        ArrayList<String> wirePoints = new ArrayList<>();
        // Start position is always the same
        int y = 0;
        int x = 0;
        for (String posArg : wire){
            String instr = posArg.substring(0,1);
            int distance = Integer.parseInt(posArg.substring(1));
            switch (instr){
                case "U":
                    y += distance;
                    break;
                case "D":
                    y -= distance;
                    break;
                case "R":
                    x += distance;
                    break;
                case "L":
                    x -= distance;
                    break;
                default:
                    throw new IllegalArgumentException("not a valid instruction");
            }
            wirePoints.add(x + "," + y);
        }
        return wirePoints;
    }

    public ArrayList<String> findEqualPositions(ArrayList<String> positionsOne, ArrayList<String> positionsTwo){
        ArrayList<String> crossPos = new ArrayList<>();
        for (String pos : positionsOne){
            for (String pos2 : positionsTwo){
                if (pos2.equals(pos)){
                    crossPos.add(pos);
                }
            }
        }
        return crossPos;
    }

    public int calculateDistanceToZero(String position){
        String[] xys = position.split(",");
        int x = Integer.parseInt(xys[0]);
        int y = Integer.parseInt(xys[1]);
        return x + y;
    }
}
