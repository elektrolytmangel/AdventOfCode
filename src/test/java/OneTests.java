import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class OneTests {

    static One one;

    @BeforeAll
    public static void initialize(){
        System.out.println("***** Code Of Advent: Day One *****");
        one = new One("src/main/resources/one.txt");
    }

    @Test
    public void firstStarGivenExampleTest(){
        int result = one.calculateFuel(14);
        assertEquals(2, result);
    }

    @Test
    public void getFirstStar(){
        int sum = 0;
        for (Integer i : one.inputValues){
            int fuel = one.calculateFuel(i);
            sum += fuel;
        }
        System.out.println("*** Result for First Star: " + sum + " ***");
    }


    @Test
    public void secondStarGivenExampleTest(){
        int result = one.calculateFuelForFuel(1969, 0);
        assertEquals(966, result);
    }

    @Test
    public void getSecondStarResult(){
        int sum = 0;
        for (Integer i : one.inputValues){
            int fuel = one.calculateFuelForFuel(i, 0);
            sum += fuel;
        }
        System.out.println("*** Result for Second Star: " + sum + " ***");
    }
}
