using AdventOfCode.Puzzels;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class TenTests
    {
        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var ten = new Ten("./Input/Ten.txt");
            var res = ten.Part1();
            //Assert.AreEqual(252, res);
            System.Console.WriteLine($"The result of day Nine / first puzzel is: {res}");
        }

        [Test]
        public void Part1ControlResult()
        {
            var ten = new Ten("./Input/TenTest.txt");
            var res = ten.Part1();
            System.Console.WriteLine($"The result of day Nine / first puzzel is: {res}");

            Assert.AreEqual(220, res);
        }

        [Test]
        public void Part2ControlResult()
        {
            var ten = new Ten("./Input/TenTest.txt");
            var res = ten.Part2();
            System.Console.WriteLine($"The result of day Nine / first puzzel is: {res}");

            Assert.AreEqual(19208, res);
        }
    }
}
