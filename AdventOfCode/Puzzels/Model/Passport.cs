using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace AdventOfCode.Puzzels.Model
{
    public class Passport
    {
        private static readonly List<string> RequieredKeys = new List<string> { "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" };
        public Passport(string[] lines)
        {
            this.Raw = lines;
            var dict = new Dictionary<string, string>();
            foreach (var l in lines)
            {
                var sp = l.Split(" ");
                foreach (var p in sp)
                {
                    var prop = p.Split(":");
                    dict.Add(prop[0], prop[1]);
                }
            }

            this.Props = dict;
        }

        public string[] Raw { get; set; }

        public Dictionary<string, string> Props { get; set; }

        // Part1
        public bool Validate1()
        {
            var availKeys = this.Props.Keys.ToList();
            foreach (var k in RequieredKeys)
            {
                if (!availKeys.Contains(k))
                {
                    //System.Console.WriteLine($"missing field:{k} for passport:{JsonConvert.SerializeObject(this.Raw)}");
                    return false;
                }
            }

            return true;
        }

        public bool Validate2()
        {
            foreach (var k in RequieredKeys)
            {
                // part1 valid
                if (this.Props.TryGetValue(k, out string value))
                {
                    // part 2 invalid
                    if(!this.ValidateField(k, value))
                    {
                        return false;
                    }

                    // if no field is invalid, the passport is valid
                }
                // part1 invalid
                else
                {
                    return false;
                }
            }

            // no requiered keys == valid || no invalid fields == valid
            return true;
        }

        //  byr(Birth Year) - four digits; at least 1920 and at most 2002.
        //  iyr(Issue Year) - four digits; at least 2010 and at most 2020.
        //  eyr(Expiration Year) - four digits; at least 2020 and at most 2030.
        //  hgt(Height) - a number followed by either cm or in:
        //      If cm, the number must be at least 150 and at most 193.
        //      If in, the number must be at least 59 and at most 76.
        //  hcl(Hair Color) - a # followed by exactly six characters 0-9 or a-f.
        //  ecl(Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
        //  pid(Passport ID) - a nine-digit number, including leading zeroes.
        //  cid(Country ID) - ignored, missing or not.
        public bool ValidateField(string key, string value)
        {
            var result = false;
            var message = $"Error: key:{key}, val:{value}";
            
            if (key == "byr")
            {
                if (int.TryParse(value, out int byr))
                {
                    result = byr >= 1920 && byr <= 2002;
                }
            }

            if (key == "iyr")
            {
                if (int.TryParse(value, out int byr))
                {
                    result = byr >= 2010 && byr <= 2020;
                }
            }

            if (key == "eyr")
            {
                if (int.TryParse(value, out int byr))
                {
                    result = byr >= 2020 && byr <= 2030;
                }
            }

            if (key == "hgt")
            {
                var regex = new Regex("^(?<high>[0-9]{2,3})(?<unit>in|cm)$");
                var res = regex.Match(value);
                if (res.Success)
                {
                    var len = int.Parse(res.Groups["high"].Value);
                    var unit = res.Groups["unit"].Value;

                    result = unit == "cm" ? len >= 150 && len <= 193 : unit == "in" && len >= 59 && len <= 76;
                }
            }

            if (key == "hcl")
            {
                var regex = new Regex("^#[0-9a-f]{6}$");
                var res = regex.Match(value);
                result = res.Success;
            }

            if (key == "ecl")
            {
                var validColors = new string[] { "amb", "blu", "brn", "gry", "grn", "hzl", "oth" };
                result = validColors.Contains(value);
            }

            if (key == "pid")
            {
                var regex = new Regex("^[0-9]{9}$");
                var res = regex.Match(value);
                result = res.Success;
            }

            if (key == "cid")
            {
                result = true;
            }

            if (!result)
            {
                System.Console.WriteLine(message);
            }

            return result;
        }
    }
}