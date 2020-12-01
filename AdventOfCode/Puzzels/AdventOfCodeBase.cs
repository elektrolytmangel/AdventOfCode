using System.IO;

namespace AdventOfCode.Puzzels
{
    public abstract class AdventOfCodeBase
    {
        public virtual string[] ReadFile(string path)
        {
            return File.ReadAllLines(path);
        }
    }
}
