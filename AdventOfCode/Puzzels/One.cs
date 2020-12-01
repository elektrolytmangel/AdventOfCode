using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode.Puzzels
{
    public class One : AdventOfCodeBase
    {
        private IList<int> inputValues;

        public One()
        {
            inputValues = this.ReadFile("Input/One.txt").Select(x => int.Parse(x)).ToList();
        }

        public int CalculateSummaryFirst()
        {
            foreach(var valOut in inputValues)
            {
                foreach (var val in inputValues)
                {
                    if (val + valOut == 2020)
                    {
                        return val * valOut;
                    }
                }
            }

            return 0;
        }

        public int CalculateSummarySecond()
        {
            foreach (var valOut in inputValues)
            {
                foreach (var val in inputValues)
                {
                    foreach(var valInner in inputValues)
                    {
                        if ((val + valOut + valInner) == 2020)
                        {
                            System.Console.WriteLine($"{val}, {valOut}, {valInner}");
                            return val * valOut * valInner;
                        }
                    }                   
                }
            }

            return 0;
        }
    }
}
