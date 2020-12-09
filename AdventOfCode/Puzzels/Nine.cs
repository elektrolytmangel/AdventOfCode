using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AdventOfCode.Puzzels
{
    public class Nine : AdventOfCodeBase
    {
        private List<long> numbers = new List<long>();

        public Nine(string path)
        {
            this.ReadFile(path);
            foreach (var numStr in this.InputValues)
            {
                numbers.Add(long.Parse(numStr));
            }
        }

        public long Part1(int preamble = 25)
        {
            for (int i = 0; i < numbers.Count; i++)
            {
                var numberIdxToCheck = i + preamble;
                // check if idx to check exists
                if (numbers.Count > numberIdxToCheck)
                {
                    var numberToCheck = numbers[numberIdxToCheck];
                    var isSum = IsSumOfPreviouse(numberToCheck, i, preamble);
                    if (!isSum)
                    {
                        return numberToCheck;
                    }
                }
            }

            return -1L;
        }

        public long Part2(int preamble = 25)
        {
            var invalidNumber = this.Part1(preamble);
            for (int i = 0; i < numbers.Count; i++)
            {
                var summands = new List<long>();
                for (int j = i; j < numbers.Count; j++)
                {
                    summands.Add(numbers[j]);

                    long sum = 0;
                    summands.ForEach(x => sum += x);
                    //Console.WriteLine($"invalidNumber: {invalidNumber}, sum:{sum}, summands: {string.Join(", ", summands)}");
                    if (sum == invalidNumber)
                    {
                        Console.WriteLine($"invalidNumber: {invalidNumber}, sum:{sum}, summands: {string.Join(", ", summands)}");

                        return summands.Min() + summands.Max();
                    }
                }
            }

            return -1L;
        }

        private bool IsSumOfPreviouse(long testSum, int startIndex, int preamble)
        {
            var estEndIdx = startIndex + preamble;
            var endIdx = numbers.Count <= estEndIdx ? numbers.Count - 1 : estEndIdx;
            for (int i = startIndex; i < endIdx; i++)
            {
                var firstNum = numbers[i];
                var otherNum = testSum - firstNum;
                var currentNumberArr = numbers.GetRange(startIndex, preamble);
                if (currentNumberArr.IndexOf(otherNum) != -1 && otherNum != firstNum)
                {
                    return true;
                }
            }          

            return false;
        }
    }
}
