using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests
{
    public class SevenTests
    {
        [Test]
        public void Part1_RealInput_ShouldGiveEndResult()
        {
            var two = new Seven("./Input/SevenInput.txt");
            var res = two.Part1();

            Assert.AreEqual(347011, res);
        }

        [Test]
        public void Part1_TestInput_ShouldGiveEndResult()
        {
            var two = new Seven("./Input/SevenInputTest.txt");
            var res = two.Part1();

            Assert.AreEqual(37, res);
        }

        [Test]
        public void Part2_RealInput_ShouldGiveEndResult()
        {
            var two = new Seven("./Input/SevenInput.txt");
            var res = two.Part2();

            Assert.AreEqual(0, res);
        }

        [Test]
        public void Part2_TestInput_ShouldGiveEndResult()
        {
            var two = new Seven("./Input/SevenInputTest.txt");
            var res = two.Part2();

            Assert.AreEqual(168, res);
        }
    }
}
