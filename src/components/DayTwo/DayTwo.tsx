import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import raw from '../../puzzels/input2.txt';

const LOGIC = {
  A: 1, // ROCK
  X: 1,
  B: 2, // PAPER
  Y: 2,
  C: 3, // SCISSOR
  Z: 3,
}

const LOGIC2 = {
  A: 1, // ROCK
  B: 2, // PAPER
  C: 3, // SCISSOR
}

const WIN: number = 6;
const DRAW: number = 3;
const LOSE: number = 0;

const TRY_OUT_LOGIC = {
  X: LOSE,
  Y: DRAW,
  Z: WIN
}

const gameResult = (left: number, right: number): number => {
  if (left === right) {
    return DRAW;
  }
  else if (left === 3 && right === 1) { // special case
    return WIN;
  }
  else if (left === 1 && right === 3) { // special case
    return LOSE;
  }
  else if (left < right) {
    return WIN;
  }
  else {
    return LOSE;
  }
}

const DayTwo = () => {
  const { input } = useInput(raw);
  const [part1Result, setPart1Result] = useState<any>();
  const [part2Result, setPart2Result] = useState<any>();

  const part1 = (input: string[]) => { // 13446
    let totalPoints: number = 0;
    for (const l of input) {
      const opp = l.split(' ')[0];
      const mine = l.split(' ')[1];

      const left = (LOGIC as any)[opp];
      const right = (LOGIC as any)[mine];
      const gameRes = gameResult(left, right);
      totalPoints += gameRes + right;
    }

    setPart1Result(totalPoints);
  }

  const part2 = (input: string[]) => {
    let totalPoints: number = 0;
    for (const l of input) {
      const opp = l.split(' ')[0];
      const mine = l.split(' ')[1];

      const left = (LOGIC2 as any)[opp];
      const excpectedResult: number = (TRY_OUT_LOGIC as any)[mine];
      for (const right of Object.values(LOGIC2 as any)) {
        const result = gameResult(left, parseInt(right as string));
        if (excpectedResult === result) {
          totalPoints += excpectedResult + parseInt(right as string);
          break;
        }
      }
    }

    setPart2Result(totalPoints);
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
        <h1 >Day 02</h1>
      </div>
      <div>
        <p>Input containing {input.length} lines</p>
        <p>Part1 <strong>{part1Result}</strong></p>
        <p>Part2 <strong>{part2Result}</strong></p>
      </div>
    </>
  );
}

export default DayTwo;