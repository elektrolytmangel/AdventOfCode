using System.Text.RegularExpressions;

namespace AdventOfCode.Puzzels
{
    public class Two : AdventOfCodeBase
    {
        public Two(string path)
        {
            this.InputValues = this.ReadFile(path);
        }

        public int Part1()
        {
            var validPasswords = 0;
            foreach(var pswdLine in this.InputValues)
            {
                var regexPattern = @"(?<min>[0-9]*)-(?<max>[0-9]*) (?<letter>[a-z]): (?<pswd>[a-z]*)";
                var regex = new Regex(regexPattern);
                var result = regex.Match(pswdLine);
               
                var min = result.Groups["min"];
                var max = result.Groups["max"];
                var letter = result.Groups["letter"];
                var pswd = result.Groups["pswd"];

                var count = 0;
                foreach (var l in pswd.Value.ToCharArray())
                {
                    count = l.ToString() == letter.Value ? count + 1 : count;
                }

                if (count >= int.Parse(min.Value) && count <= int.Parse(max.Value))
                {
                    validPasswords++;
                }
            }

            return validPasswords;
        }

        public int Part2()
        {
            var validPasswords = 0;
            foreach (var pswdLine in this.InputValues)
            {
                var regexPattern = @"(?<min>[0-9]*)-(?<max>[0-9]*) (?<letter>[a-z]): (?<pswd>[a-z]*)";
                var regex = new Regex(regexPattern);
                var result = regex.Match(pswdLine);

                var min = int.Parse(result.Groups["min"].Value);
                var max = int.Parse(result.Groups["max"].Value);
                var letter = result.Groups["letter"].Value;
                var pswd = result.Groups["pswd"];

                var pswdArr = pswd.Value.ToCharArray();
                bool minSet = pswdArr.Length >= min ? pswdArr[min - 1].ToString() == letter: false;
                bool maxSet = pswdArr.Length >= max ? pswdArr[max - 1].ToString() == letter: false;

                if (minSet ^ maxSet)
                {
                    validPasswords++;
                }
            }

            return validPasswords;
        }
    }
}
