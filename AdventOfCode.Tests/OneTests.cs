using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests;

public class OneTests
{
    [Test]
    public void Part1_RealInput_ShouldGiveEndResult()
    {
        var one = new One("./Input/OneInput.txt");
        int result = one.Part1();

        Assert.AreEqual(1527, result);
    }

    [Test]
    public void Part2_RealInput_ShouldGiveEndResult()
    {
        var one = new One("./Input/OneInput.txt");
        int result = one.Part2();

        Assert.AreEqual(1575, result);
    }
}