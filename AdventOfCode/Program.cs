using AdventOfCode.Puzzels;

namespace AdventOfCode
{
    public class Program
    {
        public static void Main(string[] args)
        {
            System.Console.WriteLine("Start adventofcode");
            var five = new Five("./Input/Five.txt");
            System.Console.WriteLine(five.Part2());
        }
    }
}
