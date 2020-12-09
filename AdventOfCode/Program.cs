using AdventOfCode.Puzzels;

namespace AdventOfCode
{
    public class Program
    {
        public static void Main(string[] args)
        {
            System.Console.WriteLine("Start adventofcode");
            var six = new Six("./Input/Six.txt");
            System.Console.WriteLine(six.Part2());
        }
    }
}
