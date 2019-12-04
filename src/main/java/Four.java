import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Four implements AdventOfCode {
    @Override
    public Object loadFile(String path) {
        return null;
    }

    public Four(){

    }

    public int countNumberOfPossibleValues(int start, int end){
        int counter = 0;
        for (int i = start; i <= end; i++){
            boolean count =  meetsNeeds(i);
            if (count){
                counter++;
            }
        }
        return counter;
    }

    public boolean meetsNeeds(int password){
        // 6-digits
        //System.out.println(password);
        List<Integer> dig = digits(password);
        //System.out.println(dig);
        int before = 0;
        int countEquals = 0;
        boolean beforeIsSmaller = true;
        boolean hasDoubleDigit = false;
        for (int i : dig){
            if (before > i){
                beforeIsSmaller = false;
            }
            if (before == i){
                countEquals++;
            }
            else {
                if (countEquals == 1){
                    hasDoubleDigit = true;
                }
                countEquals = 0;
            }
            before = i;
        }
        if (countEquals == 1){
            hasDoubleDigit = true;
        }
        return hasDoubleDigit && beforeIsSmaller;
    }

    List<Integer> digits(int i) {
        List<Integer> digits = new ArrayList<Integer>();
        while(i > 0) {
            digits.add(i % 10);
            i /= 10;
        }
        Collections.reverse(digits);
        return digits;
    }
}
