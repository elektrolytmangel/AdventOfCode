using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode.Puzzels
{
    public class Seven : AdventOfCodeBase
    {
        public Seven(string path)
        {
            this.ReadFile(path);
        }

        public int Part1()
        {
            var positions = this.InputValues[0].Split(",").Select(x => int.Parse(x)).ToList();

            positions.Sort();
            
            int indexBestPosition = (positions.Count + 1) / 2;
            int bestPosition = positions[indexBestPosition];

            var usedFuel = 0;
            positions.ForEach(x =>
            {
                usedFuel += Math.Abs(bestPosition - x);
            });

            return usedFuel; // 347743
        }

        public int Part2()
        {
            var positions = this.InputValues[0].Split(",").Select(x => int.Parse(x)).ToList();

            positions.Sort();

            int indexBestPosition = (positions.Count + 1) / 2;
            int bestPositionUp = (int)Math.Ceiling(positions.Average());
            int bestPositionDown = (int)positions.Average();

            int usedFuel1 = GetUsedFuel(positions, bestPositionUp);
            int usedFuel2 = GetUsedFuel(positions, bestPositionDown);

            return usedFuel1 > usedFuel2 ? usedFuel2 : usedFuel1; // 98363819 too high
        }

        public int GetUsedFuel(List<int> positions, int bestPosition)
        {
            var usedFuel = 0;
            positions.ForEach(x =>
            {
                int steps = Math.Abs(bestPosition - x);
                int currentFuel = 0;
                for (int i = 1; i <= steps; i++)
                {
                    currentFuel += i;
                }

                usedFuel += currentFuel;
            });

            return usedFuel;
        }
    }
}
