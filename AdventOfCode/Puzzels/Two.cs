namespace AdventOfCode.Puzzels
{
    public class Two : AdventOfCodeBase
    {
        public Two(string path)
        {
            this.ReadFile(path);
        }

        public int Part1()
        {
            int depth = 0;
            int horiz = 0;
            foreach (var cmd in this.InputValues)
            {
                string direction = cmd.Split(" ")[0];
                string meassure = cmd.Split(" ")[1];
                if (int.TryParse(meassure, out int m))
                {
                    switch(direction)
                    {
                       case "forward":
                          horiz =+m;
                          break;
                       case "down":
                          depth =+ m;
                          break;
                       case "up":
                          depth =- m;
                          break;
                    }

                    
                }
            }
            int result = horiz * depth;
            Console.WriteLine(result);
            
            return result;
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