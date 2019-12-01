import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class One implements AdventOfCode{

    public ArrayList<Integer> inputValues;

    public One (String path){
            inputValues = loadFile(path);
    }

    public int calculateFuel(int mass){
        int fuelRequiered = (mass / 3) - 2;
        return fuelRequiered;
    }

    public int calculateFuelForFuel(int fuel, int additionalFuel) {
        int newFuel = (fuel / 3) - 2;
        if (newFuel < 0) {
            return additionalFuel;
        }
        else {
            additionalFuel += newFuel;
            return calculateFuelForFuel(newFuel, additionalFuel);
        }
    }

    public ArrayList<Integer> loadFile(String path) {
        ArrayList<Integer> inputMass = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            String line = reader.readLine();
            while (line != null){
                inputMass.add(Integer.parseInt(line));
                line = reader.readLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return inputMass;
    }
}
