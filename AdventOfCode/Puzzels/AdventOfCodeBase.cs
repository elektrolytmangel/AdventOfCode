using System.IO;

namespace AdventOfCode.Puzzels
{
    public abstract class AdventOfCodeBase
    {
        public string[] InputValues { get; set; }

        public virtual string[] ReadFile(string path)
        {
            var values = File.ReadAllLines(path);
            InputValues = values;
            return values;
        }
    }
}
