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
                    switch (direction)
                    {
                        case "forward":
                            horiz += m;
                            break;
                        case "down":
                            depth += m;
                            break;
                        case "up":
                            depth -= m;
                            break;
                    }


                }
            }

            int result = horiz * depth;
            Console.WriteLine(result);

            return result;
        }

        public int Part2()
        {
            int depth = 0;
            int horiz = 0;
            int aim = 0;
            foreach (var cmd in this.InputValues)
            {
                string direction = cmd.Split(" ")[0];
                string meassure = cmd.Split(" ")[1];
                if (int.TryParse(meassure, out int m))
                {
                    switch (direction)
                    {
                        case "forward":
                            horiz += m;
                            depth += aim * m;
                            break;
                        case "down":
                            aim += m;
                            break;
                        case "up":
                            aim -= m;
                            break;
                    }


                }
            }

            int result = horiz * depth;
            Console.WriteLine(result);

            return result;
        }
    }
}