using AdventOfCode.Puzzels.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode.Puzzels
{
    public class Five : AdventOfCodeBase
    {
        public Five(string path)
        {
            this.ReadFile(path);
        }

        public int Part1()
        {
            return this.GetSeatIds().Max();
        }

        public int Part2()
        {
            var seatIds = GetSeatIds().OrderBy(x => x).ToList();
            for (int i = 0; i < seatIds.Count - 1; i++)
            {
                if (seatIds[i] + 1 != seatIds[i + 1])
                {
                    return seatIds[i] + 1;
                }
            }

            return 1;
        }

        private List<int> GetSeatIds()
        {
            var seatIds = new List<int>();
            foreach (var boardingPass in this.InputValues)
            {
                var rows = boardingPass.Substring(0, 7);
                var seats = boardingPass.Substring(7, 3);
                var rowsIdx = this.ConvertCommands(rows, "row");
                var seatsIdx = this.ConvertCommands(seats, "seat");

                var rowRes = Convert.ToInt32(rowsIdx, 2);
                var seatsRes = Convert.ToInt32(seatsIdx, 2);

                var seatId = (rowRes * 8) + seatsRes;
                seatIds.Add(seatId);
            }

            return seatIds;
        }

        private string ConvertCommands(string commands, string searchType)
        {
            var upper = string.Empty;
            var lower = string.Empty;
            if ("row" == searchType)
            {
                lower = "F";
                upper = "B";
            }
            else if ("seat" == searchType)
            {
                lower = "L";
                upper = "R";
            }

            var binaryBasedCmd = string.Empty;
            foreach (char cmd in commands.ToCharArray())
            {
                var type = cmd.ToString() == lower ? 0 : cmd.ToString() == upper ? 1 : -1;
                binaryBasedCmd += type;
            }

            return binaryBasedCmd;
        }
    }
}
