import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import raw from '../../puzzels/input2.txt';

const ROCK = { oponent: 'A', mine: 'X', points: 1 };
const PAPER = { oponent: 'B', mine: 'Y', points: 2 };
const SCISSORS = { oponent: 'C', mine: 'Z', points: 3 };

const LOGIC = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
}

// Paper - ROCK = 1 // LOSE
// Scissor - ROCK = 2 // WIN
// ROCK - SCISSOR = -2 // LOSE
// Scissor - Paper = 1 // lose
// Paper - Scissor = -1 // WIN
// AX DRAW
// BX LOSE
// CZ WIN
// AY LOSE
// BY DRAW
// CY WIN
// AZ LOSE
// BZ WIN

const WIN: number = 6;
const DRAW: number = 3;
const LOSE: number = 0;

const DayTwo = () => {
  const { input } = useInput(raw);
  const [part1Result, setPart1Result] = useState<any>();
  const [part2Result, setPart2Result] = useState<any>();

  const part1 = (input: string[]) => {
    let totalPoints: number = 0;
    for (const l of input) {
      const opp = l.split(' ')[0];
      const mine = l.split(' ')[1];

      const left = (LOGIC as any)[opp];
      const right = (LOGIC as any)[mine];

      const result = left - right;
      if (result === 2 || result === -1) {
        // win
        totalPoints += WIN + right;
      }
      else if (result === 0) {
        // draw
        totalPoints += DRAW + right;
      }
      else {
        // lose
        totalPoints += LOSE + right;
      }
    }

    setPart1Result(totalPoints);
  }

  const part2 = (input: string[]) => {

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