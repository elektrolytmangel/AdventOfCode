using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class FiveTests
    {

        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var five = new Five("./Input/Five.txt");
            var res = five.Part1();
            System.Console.WriteLine($"The result of day five / first puzzel is: {res}");

            Assert.AreEqual(874, res);
        }

        [Test]
        public void GetResultOfSecondPuzzle()
        {
            var five = new Five("./Input/Five.txt");
            var res = five.Part2();
            System.Console.WriteLine($"The result of day five / second puzzel is: {res}");

            Assert.AreEqual(594, res);
        }
    }
}
