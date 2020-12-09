using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace AdventOfCode.Puzzels
{
    public class Six : AdventOfCodeBase
    {
        public Six(string path)
        {
            this.ReadFile(path);
        }

        public int Part1()
        {
            var groupRes = new List<int>();
            var group = string.Empty;
            for (int i = 0; i <= this.InputValues.Length; i++)
            {
                if (i < this.InputValues.Length && !string.IsNullOrEmpty(this.InputValues[i]))
                {
                    group += this.InputValues[i];
                    continue;
                }

                var res = group.ToCharArray().ToList().Distinct().Count();
                groupRes.Add(res);
                group = string.Empty;

            }

            var sum = 0;
            groupRes.ForEach(x => sum += x);
            return sum;
        }

        public int Part2()
        {
            var groupRes = new List<int>();
            var group = new List<string>();
            for (int i = 0; i <= this.InputValues.Length; i++)
            {
                if (i < this.InputValues.Length && !string.IsNullOrEmpty(this.InputValues[i]))
                {
                    group.Add(this.InputValues[i]);
                    continue;
                }

                var groupCalc = group.Select(x => x.ToCharArray());
                var first = groupCalc.FirstOrDefault();

                var countSame = 0;
                foreach (var control in first)
                {
                    var res = groupCalc.Where(x => x.Contains(control)).Count();
                    bool all = res == groupCalc.Count();
                    if (all)
                    {
                        countSame++;
                    }
                }

                groupRes.Add(countSame);
                group.Clear();
            }

            var sum = 0;
            groupRes.ForEach(x => sum += x);
            return sum;
        }
    }
}
