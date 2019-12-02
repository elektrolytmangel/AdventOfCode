import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TwoTests {

    static Two two;

    @BeforeAll
    public static void initialize() {
        System.out.println("***** Advent Of Code: Day Two *****");
        two = new Two("src/main/resources/two.txt");
        //two.inputValues.toArray();
    }

    @Test
    public void firstStartGivenExampleTest1() {
        String input = "1,0,0,0,99";
        ArrayList<Integer> inputArray = Two.convertCsvToArrayList(input);
        two.intCode(inputArray);
        ArrayList<Integer> resultArray = Two.convertCsvToArrayList("2,0,0,0,99");
        assertEquals(resultArray, inputArray);
    }

    @Test
    public void firstStartGivenExampleTest2() {
        String input = "1,1,1,4,99,5,6,0,99";
        ArrayList<Integer> inputArray = Two.convertCsvToArrayList(input);
        two.intCode(inputArray);
        ArrayList<Integer> resultArray = Two.convertCsvToArrayList("30,1,1,4,2,5,6,0,99");
        assertEquals(resultArray, inputArray);
    }

    @Test
    public void getFirstStarResult(){
        two.intCode(two.inputValues);
        System.out.println("*** Result for First Star: " + two.inputValues.get(0) + " ***");
    }

    @Test
    public void getSecondStarResult(){
        for (int i = 0; i <= 99; i++){
            for (int y = 0; y <= 99; y++){
                Two secondTwo = new Two("src/main/resources/two.txt");
                secondTwo.inputValues.set(1, i);
                secondTwo.inputValues.set(2, y);
                try{
                    secondTwo.intCode(secondTwo.inputValues);
                }
                catch (IllegalArgumentException ex){

                }
                if (secondTwo.inputValues.get(0) == 19690720){
                    int result = (100 * i) + y;
                    System.out.println("*** Result for Second Star: " + result + " ***");
                }
            }
        }
    }
}
