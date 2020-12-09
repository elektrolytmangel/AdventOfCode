using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class NineTests
    {
        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var nine = new Nine("./Input/Nine.txt");
            var res = nine.Part1();
            //Assert.AreEqual(252, res);
            System.Console.WriteLine($"The result of day Nine / first puzzel is: {res}");
        }

        [Test]
        public void Part1ControlResult()
        {
            var nine = new Nine("./Input/NineTest.txt");
            var res = nine.Part1(5);
            System.Console.WriteLine($"The result of day Nine / first puzzel is: {res}");

            Assert.AreEqual(127, res);
        }

        [Test]
        public void Part2ControlResult()
        {
            var nine = new Nine("./Input/NineTest.txt");
            var res = nine.Part2(5);
            System.Console.WriteLine($"The result of day Nine / first puzzel is: {res}");

            Assert.AreEqual(62, res);
        }

        [Test]
        public void GetResultOfSecondPuzzle()
        {
            var nine = new Nine("./Input/Nine.txt");
            var res = nine.Part2();
            //Assert.AreEqual(252, res);
            System.Console.WriteLine($"The result of day Nine / second puzzel is: {res}");
        }
    }
}
