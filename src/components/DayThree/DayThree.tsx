import { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import raw from '../../puzzels/input3.txt';

const DayThree = () => {
  const { input } = useInput(raw);
  const [part1Result, setPart1Result] = useState<any>();
  const [part2Result, setPart2Result] = useState<any>();

  const part1 = (input: string[]) => {
    const stream = input[0];
    for (let i = 3; i < stream.length; i++) {
      const compare = `${stream[i - 3]}${stream[i - 2]}${stream[i - 1]}${stream[i]}`;

      let cBefore = '';
      let isUnique = true;
      for (const c of compare.split('').sort()) {
        if (c === cBefore) {
          isUnique = false;
          break;
        }
        cBefore = c;
      }

      if (isUnique) {
        setPart1Result(i + 1);
        break;
      }
    }
  }

  const part2 = (input: string[]) => {
    const stream = input[0];
    for (let i = 3; i < stream.length; i++) {
      const compare: string[] = [];
      for (let k = 13; k >= 0; k--) {
        compare.push(stream[i - k]);
      }

      let cBefore = '';
      let isUnique = true;
      for (const c of compare.sort()) {
        if (c === cBefore) {
          isUnique = false;
          break;
        }
        cBefore = c;
      }

      if (isUnique) {
        setPart2Result(i + 1);
        break;
      }
    }
  }

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
      </div>
      <div>
        <p>Input containing {input.length} lines</p>
        <p>Part1 <strong>{part1Result}</strong></p>
        <p>Part2 <strong>{part2Result}</strong></p>
      </div>
    </>
  );
}

export default DayThree;