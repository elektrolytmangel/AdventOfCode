import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class FourTests {

    @Test
    public void getFirstStarResult(){
        Four four = new Four();
        int count = four.countNumberOfPossibleValues(265275, 781584);
        System.out.println(count);
    }

    @Test
    public void givenExample1(){
        Four four = new Four();
        boolean meets = four.meetsNeeds(111111);
        System.out.println(meets);
        assertFalse(meets);
    }

    @Test
    public void givenExample2(){
        Four four = new Four();
        boolean meets = four.meetsNeeds(223450);
        System.out.println(meets);
        assertFalse(meets);
    }

    @Test
    public void givenExample3(){
        Four four = new Four();
        boolean meets = four.meetsNeeds(123789);
        System.out.println(meets);
        assertFalse(meets);
    }

    @Test
    public void givenExample4(){
        Four four = new Four();
        boolean meets = four.meetsNeeds(123444);
        System.out.println(meets);
        assertFalse(meets);
    }

    @Test
    public void givenExample5(){
        Four four = new Four();
        boolean meets = four.meetsNeeds(111122);
        System.out.println(meets);
        assertTrue(meets);
    }
}
