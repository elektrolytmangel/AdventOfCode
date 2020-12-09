using AdventOfCode.Puzzels.Model;
using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode.Puzzels
{
    public class Four : AdventOfCodeBase
    {
        public Four(string path)
        {
            this.ReadFile(path);
        }

        public int Part1()
        {
            var passports = this.GetPassports();

            int valid = passports.Where(x => x.Validate1()).Count();

            return valid;
        }

        public int Part2()
        {
            List<Passport> passports = this.GetPassports();

            int valid = passports.Where(x => x.Validate2()).Count();

            return valid;
        }

        private List<Passport> GetPassports()
        {
            var passports = new List<Passport>();
            var lastLines = new List<string>();
            for (int i = 0; i <= this.InputValues.Length; i++)
            {
                var cur = string.Empty;
                if (i < this.InputValues.Length)
                {
                    cur = this.InputValues[i];
                }

                // got passport line
                if (!string.IsNullOrEmpty(cur))
                {
                    lastLines.Add(cur);
                }
                // last passport finish, assemble
                else
                {
                    passports.Add(new Passport(lastLines.ToArray()));
                    lastLines.Clear();
                }
            }

            return passports;
        }
    }
}