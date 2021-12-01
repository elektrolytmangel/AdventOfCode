namespace AdventOfCode.Puzzels
{
    public class One : AdventOfCodeBase
    {
        public One(string path)
        {
            this.ReadFile(path);
        }

        public void Part1()
        {
            int count = 0;
            int before = -1;
            foreach (var meassure in this.InputValues)
            {
                if (int.TryParse(meassure, out int m))
                {
                    if (before != -1 && before < m)
                    {
                        count++;
                    }

                    before = m;
                }
            }

            Console.WriteLine(count);
        }

        public void Part2()
        {
            int count = 0;
            int before = -1;
            for(int i = 0; i < this.InputValues.Length - 2; i++)
            {
                int first = int.Parse(this.InputValues[i]);
                int second = int.Parse((this.InputValues[i + 1]));
                int third = int.Parse((this.InputValues[i + 2]));

                int currentSum = first + second + third;

                if (before != -1 && before < currentSum)
                {
                    count++;
                }

                before = currentSum;
            }

            Console.WriteLine(count);
        }
    }
}