using System;
using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode.Puzzels
{
    public class Three : AdventOfCodeBase
    {

        public Three(string path)
        {
            this.ReadFile(path);
        }

        public int Part1()
        {
            return CountTrees(3, 1);
        }

        private int CountTrees(int r, int d)
        {
            // create 2-dimensional array
            var world = new List<List<string>>();
            foreach (var line in this.InputValues)
            {
                world.Add(line.ToCharArray().Select(x => x.ToString()).ToList());
            }

            var treeCount = 0;
            var j = 0;
            for (int i = d; i < world.Count; i += d)
            {
                j = j + r >= world[i].Count ? j + r - world[i].Count : j + r;
                var checkVal = world[i][j];
                if (checkVal == "#")
                {
                    treeCount++;
                }
            }

            return treeCount;
        }

        public long Part2()
        {
            long prod = 1;
            bool secondLoop = false;
            for(int d = 1; d < 3; d++)
            {
                for (int r = 1; r < 8; r += 2)
                {
                    Console.WriteLine($"r:{r} d:{d}");
                    prod *= this.CountTrees(r, d);
                    if (secondLoop)
                    {
                        return prod;
                    }
                }

                secondLoop = true;
            }

            return prod;
        }
    }
}
