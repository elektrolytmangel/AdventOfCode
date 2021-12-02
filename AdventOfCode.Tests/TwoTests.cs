using NUnit.Framework;

namespace AdventOfCode.Tests;

public class TwoTests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Part1Test_RealInput_ShouldGiveEndResult()
    {
        var two = new Two("TwoInput.txt");
        var res = two.Part1();
        
        Assert.AreEqual(0, res);
    }
}