using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests
{
    public class SixTests
    {
        [Test]
        public void Part1_RealInput_ShouldGiveEndResult()
        {
            var two = new Six("./Input/SixInput.txt");
            var res = two.Part1();

            Assert.AreEqual(380612, res);
        }

        [Test]
        public void Part1_TestInput_ShouldGiveEndResult()
        {
            var two = new Six("./Input/SixInputTest.txt");
            var res = two.Part1();

            Assert.AreEqual(5934, res);
        }
    }
}
