import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

public class Three implements AdventOfCode {

    public static void main(String[] args){
        Three three = new Three("src/main/resources/three.txt");
        ArrayList<ArrayList<String>> wiresWithPositions = new ArrayList<>();
        for (String wire : three.inputValues){
            wiresWithPositions.add(three.calculatePositions(Three.convertCsvToArrayList(wire)));
        }
        System.out.println("find equal positions");
        ArrayList<String> equalPositions = three.findEqualPositions(wiresWithPositions.get(0), wiresWithPositions.get(1));
        System.out.println(equalPositions);
        System.out.println("calculate distances");
        ArrayList<Integer> distances = new ArrayList<>();
        for (String pos : equalPositions){
            distances.add(three.calculateDistanceToZero(pos));
        }
        System.out.println("sort distances");
        Collections.sort(distances);
        System.out.println(distances);
    }

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
            System.out.println("Current pos: " + x + ", " + y);
            System.out.println("Args: orig=" + posArg + " case=" + instr + " dist=" + distance );
            switch (instr){
                case "U":
                    for (int i = 0; i < distance; i++){
                        y++;
                        wirePoints.add(x + "," + y);
                    }
                    break;
                case "D":
                    for (int i = 0; i < distance; i++){
                        y--;
                        wirePoints.add(x + "," + y);
                    }
                    break;
                case "R":
                    for (int i = 0; i < distance; i++){
                        x++;
                        wirePoints.add(x + "," + y);
                    }
                    break;
                case "L":
                    for (int i = 0; i < distance; i++){
                        x--;
                        wirePoints.add(x + "," + y);
                    }
                    break;
                default:
                    throw new IllegalArgumentException("not a valid instruction");
            }
        }
        return wirePoints;
    }

//    public boolean isVectorCrossing(Vector vector1, Vector vector2){
//        boolean xCross = false;
//        boolean yCross = true;
//        if (vector1.x1 < vector2.x1 && )
//    }

    public ArrayList<String> findEqualPositions(ArrayList<String> positionsOne, ArrayList<String> positionsTwo){
        ArrayList<String> crossPos = new ArrayList<>();
        System.out.println(positionsOne.size());
        System.out.println(positionsTwo.size());
        String posBefore;
        String posAfter;
        for (int i = 0; i < positionsOne.size(); i++) {
            String pos = positionsOne.get(i);
            if (positionsTwo.contains(pos)) {
                int pos2Idx = positionsTwo.indexOf(pos);

                crossPos.add(pos);
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

    public class Vector{
        int x1;
        int x2;
        int y1;
        int y2;

        public Vector(int x1, int x2, int y1, int y2) {
            this.x1 = x1;
            this.x2 = x2;
            this.y1 = y1;
            this.y2 = y2;
        }
    }
}
