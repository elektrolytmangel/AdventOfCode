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
            int countDays = 0;
            var lanternfishes = this.InputValues.First().Split(",").Select(x => int.Parse(x)).ToList();
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

                for (int n = 0; n < newBorns; n++)
                {
                    lanternfishes.Add(8);
                }
            }
           

            return lanternfishes.Count;
        }
    }
}
