using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class TwoTests
    {
        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var two = new Two("./Input/Two.txt");
            var res = two.Part1();
            System.Console.WriteLine($"The result of day two / first puzzel is: {res}");
        }

        [Test]
        public void GetResultOfSecondPuzzle()
        {
            var two = new Two("./Input/Two.txt");
            var res = two.Part2();
            System.Console.WriteLine($"The result of day two / second puzzel is: {res}");
        }
    }
}
