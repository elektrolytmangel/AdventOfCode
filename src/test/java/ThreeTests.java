import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;

public class ThreeTests {

    @Test
    public void getFirstStarResult(){
        Three three = new Three("src/main/resources/three.txt");
        ArrayList<ArrayList<String>> wiresWithPositions = new ArrayList<>();
        for (String wire : three.inputValues){
            System.out.println(wire);
            wiresWithPositions.add(three.calculatePositions(Three.convertCsvToArrayList(wire)));
        }
        System.out.println(wiresWithPositions.get(0));
        System.out.println(wiresWithPositions.get(1));
        ArrayList<String> equalPositions = three.findEqualPositions(wiresWithPositions.get(0), wiresWithPositions.get(1));
        System.out.println(equalPositions);
        ArrayList<Integer> distances = new ArrayList<>();
        for (String pos : equalPositions){
            distances.add(three.calculateDistanceToZero(pos));
        }

        Collections.sort(distances);
        System.out.println(distances);
    }
}
