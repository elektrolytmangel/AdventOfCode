using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class SixTests
    {

        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var six = new Six("./Input/Six.txt");
            var res = six.Part1();
            System.Console.WriteLine($"The result of day four / first puzzel is: {res}");

            Assert.AreEqual(228, res);
        }


        [Test]
        public void Part1ControlResult()
        {
            var six = new Six("./Input/SixTest.txt");
            var res = six.Part1();
            Assert.AreEqual(11, res);
        }
    }
}
