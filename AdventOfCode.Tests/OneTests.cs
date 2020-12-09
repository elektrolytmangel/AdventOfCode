using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class OneTests
    {
        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var one = new One();
            var res = one.CalculateSummaryFirst();
            System.Console.WriteLine($"The result of day one / first puzzel is: {res}");
        }

        [Test]
        public void GetResultOfSecondPuzzle()
        {
            var one = new One();
            var res = one.CalculateSummarySecond();
            System.Console.WriteLine($"The result of day one / second puzzel is: {res}");
        }
    }
}