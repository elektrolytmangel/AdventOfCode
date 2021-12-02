using AdventOfCode.Puzzels;
using NUnit.Framework;

namespace AdventOfCode.Tests;

public class TwoTests
{
    [Test]
    public void Part1_RealInput_ShouldGiveEndResult()
    {
        var two = new Two("./Input/TwoInput.txt");
        var res = two.Part1();
        
        Assert.AreEqual(2027977, res);
    }

    [Test]
    public void Part1_TestInput_ShouldGiveEndResult()
    {
        var two = new Two("./Input/TwoInputTest.txt");
        var res = two.Part1();

        Assert.AreEqual(150, res);
    }

    [Test]
    public void Part2_TestInput_ShouldGiveEndResult()
    {
        var two = new Two("./Input/TwoInputTest.txt");
        var res = two.Part2();

        Assert.AreEqual(900, res);
    }

    [Test]
    public void Part2_RealInput_ShouldGiveEndResult()
    {
        var two = new Two("./Input/TwoInput.txt");
        var res = two.Part2();

        Assert.AreEqual(1903644897, res);
    }
}