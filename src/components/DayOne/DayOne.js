import { useState, useEffect } from 'react';
import raw from '../../puzzels/input1.txt';

const DayOne = () => {
  const [input, setInput] = useState([]);
  const [part1Result, setPart1Result] = useState();
  const [part2Result, setPart2Result] = useState();

  const parseInput = () => {
    return fetch(raw)
      .then(r => r.text())
      .then(t => {
        return t.split('\n').map(line => line.trim());
      });
  }

  const calcCaloriesByElf = (input) => {
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

    return caloriesByElf.sort((a, b) => parseInt(a) - parseInt(b));
  }

  const part1 = (input) => {
    const result = calcCaloriesByElf(input);
    setPart1Result(result[result.length - 1]);
  }

  const part2 = (input) => {
    const cals = calcCaloriesByElf(input);
    let result = cals[cals.length - 1];
    result += cals[cals.length - 2];
    result += cals[cals.length - 3];
    setPart2Result(result);
  }

  useEffect(() => {
    parseInput().then(r => setInput(r));
  }, [setInput]);

  useEffect(() => {
    if (input.length > 0) {
      part1(input);
      part2(input);
    }
  }, [input]);

  return (
    <>
      <div className="grid-x">
        <h1 >Day 01</h1>
        <button onClick={() => part1(input)} className="button">Part1</button>
        <button onClick={() => part2(input)} className="button">Part2</button>
      </div>
      <div>
        <p>Input containing {input.length} lines</p>
        <p>Part1: {part1Result}</p>
        <p>Part2: {part2Result}</p>
      </div>
    </>

  )
}

export default DayOne;