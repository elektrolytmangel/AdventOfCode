using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AdventOfCode.Puzzels
{
    public class Ten : AdventOfCodeBase
    {
        public Ten(string path)
        {
            this.ReadFile(path);
        }

        public int Part1()
        {
            var adapters = this.InputValues.Select(x => int.Parse(x)).OrderBy(x => x).ToArray();

            int lastJolt = 0; // initial for the charging outlet it is 0
            var joltageDifferences = new List<int>();
            for (int i = 0; i < adapters.Count(); i++)
            {
                for (int j = 1; j <= 3; j++)
                {
                    if (lastJolt + j == adapters[i])
                    {
                        lastJolt = adapters[i];
                        joltageDifferences.Add(j);
                        break;
                    }
                }
            }

            joltageDifferences.Add(3); // add difference to device

            var numberOneJolt = joltageDifferences.Count(x => x == 1);
            var numberThreeJolt = joltageDifferences.Count(x => x == 3);

            return numberOneJolt * numberThreeJolt;
        }

        public long Part2()
        {
            var adapters = this.InputValues.Select(x => int.Parse(x)).OrderBy(x => x).ToArray();

            int lastJolt = 0; // initial for the charging outlet it is 0
            long totalCountOfPossibilities = 0L;
            for (int i = -1; i < adapters.Count() -1; i++)
            {
                for (int j = 1; j <= 3; j++)
                {
                    if (i + j < adapters.Count())
                    {
                        var currJolt = adapters[i + j];
                        for (int k = 1; k <= 3; k++)
                        {
                            if (currJolt - k == lastJolt)
                            {
                                totalCountOfPossibilities++;
                            }
                        }                        
                    }
                }

                lastJolt = adapters[i + 1];
            }

            return totalCountOfPossibilities;
        }
    }
}
