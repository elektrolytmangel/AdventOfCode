import javax.rmi.ssl.SslRMIClientSocketFactory;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class Two implements AdventOfCode {

    public ArrayList<Integer> inputValues = new ArrayList<>();

    public Two(String path) {
        inputValues = Two.convertCsvToArrayList(loadFile(path));
    }

    @Override
    public String loadFile(String path) {
        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            String line = reader.readLine();
            return line;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void intCode(ArrayList<Integer> values) {
        int opcodeIndex = 0;
        for (int value : values){
            if (values.size() > opcodeIndex + 4) {
                int opcode = values.get(opcodeIndex);
                if (opcode == 99) {
                    // next opcode is just one ahead
                    opcodeIndex++;
                } else if (opcode == 1) {
                    // addition
                    if (values.size() >= opcodeIndex + 4){
                        calculateOptOne(values, opcodeIndex);
                    }
                    opcodeIndex += 4;
                } else if (opcode == 2) {
                    // multiplication
                    if (values.size() >= opcodeIndex + 4){
                        calculateOptTwo(values, opcodeIndex);
                    }
                    opcodeIndex += 4;
                } else {
                    throw new IllegalArgumentException("something went wrong");
                }
            }
        }
    }

    public ArrayList<Integer> calculateOptOne(ArrayList<Integer> input, int opcodeIndex){
        int indexFirstArg = input.get(opcodeIndex + 1);
        int indexSecondArg = input.get(opcodeIndex + 2);
        int resultIndex = input.get(opcodeIndex + 3);
        int result = input.get(indexFirstArg) + input.get(indexSecondArg);
        input.set(resultIndex, result);
        return input;
    }

    public ArrayList<Integer> calculateOptTwo(ArrayList<Integer> input, int opcodeIndex){
        int indexFirstArg = input.get(opcodeIndex + 1);
        int indexSecondArg = input.get(opcodeIndex + 2);
        int resultIndex = input.get(opcodeIndex + 3);
        int result = input.get(indexFirstArg) * input.get(indexSecondArg);
        input.set(resultIndex, result);
        return input;
    }

    public static ArrayList<Integer> convertCsvToArrayList(String csv) {
        String[] testInput = csv.split(",");
        ArrayList<Integer> inputArray = new ArrayList<>();
        for (int i = 0; i < testInput.length; i++){
            inputArray.add(Integer.parseInt(testInput[i]));
        }
        return inputArray;
    }
}
