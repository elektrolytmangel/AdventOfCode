using AdventOfCode.Puzzels;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class ThreeTests
    {
        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var three = new Three("./Input/Three.txt");
            var res = three.Part1();
            Assert.AreEqual(252, res);
            System.Console.WriteLine($"The result of day three / first puzzel is: {res}");
        }

        [Test]
        public void Part1ControlResult()
        {
            var three = new Three("./Input/ThreeTest.txt");
            var res = three.Part1();

            Assert.AreEqual(7, res);
        }

        [Test]
        public void GetResultOfSecondPuzzle()
        {
            var three = new Three("./Input/Three.txt");
            var res = three.Part2();
            Assert.AreEqual(2608962048, res);
            System.Console.WriteLine($"The result of day three / second puzzel is: {res}");
        }
    }
}
