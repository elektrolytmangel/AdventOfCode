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
            int maxDays = 80;
            var lanternfishes = this.InputValues.First().Split(",").Select(x => int.Parse(x)).ToList();
            long newBornsOver7Days = 0l;
            for (int d = 0; d < maxDays; d++)
            {
                int newBorns = 0;
                for (int i = 0; i < lanternfishes.Count(); i++)
                {
                    int fish = lanternfishes[i];
                    if (fish == 0)
                    {
                        newBorns++;
                        lanternfishes[i] = 6;
                    }
                    else
                    {
                        lanternfishes[i] = --fish;
                    }
                }
                newBornsOver7Days += newBorns;

                if (d % 7 == 0)
                {
                    Console.WriteLine(newBornsOver7Days);
                    newBornsOver7Days = 0;
                }

                for (int n = 0; n < newBorns; n++)
                {
                    lanternfishes.Add(8);
                }
            }


            return lanternfishes.Count;
        }

        public long Part2()
        {
            int maxDays = 256;
            var lanternfishesInit = this.InputValues.First().Split(",").Select(x => int.Parse(x)).ToList();
            var lanterfishesPoulation = new List<long>(9);
            lanterfishesPoulation.AddRange(new long[] { 0, 0, 0, 0, 0, 0, 0, 0, 0 });
            foreach (int fish in lanternfishesInit)
            {
                lanterfishesPoulation[fish] += 1;
            }

            for (int d = 0; d < maxDays; d++)
            {
                long newPopulation = lanterfishesPoulation.ElementAt(0);
                lanterfishesPoulation.RemoveAt(0);
                lanterfishesPoulation[6] += newPopulation;
                lanterfishesPoulation.Insert(8, newPopulation);
            }

            return lanterfishesPoulation.Aggregate((a, b) => a + b);
        }
    }
}
