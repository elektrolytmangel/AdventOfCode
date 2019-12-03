import org.junit.jupiter.api.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;

public class ThreeTests {

    @Test
    public void firstStarGivenExample1(){
        Three three = new Three("src/main/resources/three.txt");
        ArrayList<String> first = Three.convertCsvToArrayList("R75,D30,R83,U83,L12,D49,R71,U7,L72");
        ArrayList<String> second = Three.convertCsvToArrayList("U62,R66,U55,R34,D71,R55,D58,R83");

        ArrayList<String> firstPos = three.calculatePositions(first);
        ArrayList<String> secondPos = three.calculatePositions(second);

        ArrayList<String> equals = three.findEqualPositions(firstPos, secondPos);
        System.out.println(equals);
        ArrayList<Integer> distances = new ArrayList<>();
        for (String e : equals){
            distances.add(three.calculateDistanceToZero(e));
        }
        System.out.println(distances);
    }

    @Test
    public void firstStarGivenExample2(){
        Three three = new Three("src/main/resources/three.txt");
        ArrayList<String> first = Three.convertCsvToArrayList("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51");
        ArrayList<String> second = Three.convertCsvToArrayList("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7");

        ArrayList<String> firstPos = three.calculatePositions(first);
        ArrayList<String> secondPos = three.calculatePositions(second);

        ArrayList<String> equals = three.findEqualPositions(firstPos, secondPos);
        System.out.println(equals);
        ArrayList<Integer> distances = new ArrayList<>();
        for (String e : equals){
            distances.add(three.calculateDistanceToZero(e));
        }
        System.out.println(distances);
    }

    @Test
    public void getFirstStarResult(){
        Three three = new Three("src/main/resources/three.txt");
        ArrayList<ArrayList<String>> wiresWithPositions = new ArrayList<>();
        for (String wire : three.inputValues){
            wiresWithPositions.add(three.calculatePositions(Three.convertCsvToArrayList(wire)));
        }
        System.out.println("find equal positions");
        ArrayList<String> equalPositions = three.findEqualPositions(wiresWithPositions.get(0), wiresWithPositions.get(1));
        System.out.println("calculate distances");
        ArrayList<Integer> distances = new ArrayList<>();
        for (String pos : equalPositions){
            distances.add(three.calculateDistanceToZero(pos));
        }
        System.out.println("sort distances");
        Collections.sort(distances);
        System.out.println(distances);
    }
}
