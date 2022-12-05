import { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import raw from '../../puzzels/input1.txt';

const DayOne = () => {
  const { input } = useInput(raw);
  const [part1Result, setPart1Result] = useState<any>();
  const [part2Result, setPart2Result] = useState<any>();

  const calcCaloriesByElf = (input: string[]) => {
    let caloriesByElf = [];
    let currentCalories = 0;
    for (let l of input) {
      if (l !== '') {
        currentCalories += parseInt(l);
      }
      else {
        caloriesByElf.push(currentCalories);
        currentCalories = 0;
      }
    }

    return caloriesByElf.sort((a, b) => a - b);
  }

  const part1 = (input: string[]) => {
    const result = calcCaloriesByElf(input);
    setPart1Result(result[result.length - 1]);
  }

  const part2 = (input: string[]) => {
    const cals = calcCaloriesByElf(input);
    let result = cals[cals.length - 1];
    result += cals[cals.length - 2];
    result += cals[cals.length - 3];
    setPart2Result(result);
  }

  return (
    <>
      <div className="grid-x">
        <h1 >Day 01</h1>
        <button onClick={() => part1(input)} className="button success">Part1</button>
        <button onClick={() => part2(input)} className="button success">Part2</button>
      </div>
      <div>
        <p>Input containing {input.length} lines</p>
        <p>Part1 <strong>{part1Result}</strong></p>
        <p>Part2 <strong>{part2Result}</strong></p>
      </div>
    </>
  );
}

export default DayOne;

