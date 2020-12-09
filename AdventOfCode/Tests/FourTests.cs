using AdventOfCode.Puzzels;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdventOfCode.Tests
{
    [TestFixture]
    public class FourTests
    {
        [Test]
        public void GetResultOfFirstPuzzle()
        {
            var three = new Four("./Input/Four.txt");
            var res = three.Part1();
            System.Console.WriteLine($"The result of day four / first puzzel is: {res}");

            Assert.AreEqual(228, res);
        }


        [Test]
        public void Part1ControlResult()
        {
            var three = new Four("./Input/FourTest.txt");
            var res = three.Part1();
            Assert.AreEqual(3, res);
        }

        [Test]
        public void Part2ControlResult()
        {
            var fourValid = new Four("./Input/FourTests2Valid.txt");
            var resValid = fourValid.Part2();

            var fourInvalid = new Four("./Input/FourTests2Invalid.txt");
            var resInvalid = fourInvalid.Part2();

            Assert.AreEqual(4, resValid);
            Assert.AreEqual(0, resInvalid);
        }

        [Test]
        public void GetResultOfSecondPuzzle()
        {
            var three = new Four("./Input/Four.txt");
            var res = three.Part2();
            System.Console.WriteLine($"The result of day four / second puzzel is: {res}");

            Assert.Greater(176, res);
        }
    }
}
