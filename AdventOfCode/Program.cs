using AdventOfCode.Puzzels;

namespace AdventOfCode
{
    public class Program
    {
        public static void Main(string[] args)
        {
            System.Console.WriteLine("Start adventofcode");
            var ten = new Ten("./Input/Ten.txt");
            System.Console.WriteLine(ten.Part2());
        }
    }
}
