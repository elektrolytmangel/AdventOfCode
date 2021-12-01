using System.IO;

namespace AdventOfCode.Puzzels
{
    public abstract class AdventOfCodeBase
    {
        public AdventOfCodeBase()
        {
            InputValues = new string[0];
        }

        public string[] InputValues { get; set; }

        public virtual string[] ReadFile(string path)
        {
            var values = File.ReadAllLines(path);
            InputValues = values;
            return values;
        }
    }
}
