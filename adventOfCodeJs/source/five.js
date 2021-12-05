import { getLines } from "./modules/input.js";

let inputValues = getLines("five");

const parseInputToObject = () => {
  return inputValues.map(x => {
    let start = x.split('->')[0];
    let end = x.split('->')[1];
    return {
      start: {
        x: parseInt(start.split(',')[0]),
        y: parseInt(start.split(',')[1]),
      },
      end: {
        x: parseInt(end.split(',')[0]),
        y: parseInt(end.split(',')[1]),
      }
    }
  })
}

const filerStraightLinesOnly = (array) => {
  return array.filter(position => {
    return position.start.x == position.end.x || position.start.y == position.end.y;
  })
}

function range(start, end) {
  let ans = [];
  // if values are equal not need to change
  let biggerVal = start > end ? start : end;
  let smallerVal = start < end ? start : end;
  for (let i = smallerVal; i <= biggerVal; i++) {
    ans.push(i);
  }

  return ans;
}


const part1 = () => {
  let parsedInput = parseInputToObject();
  let onlyStraightLines = filerStraightLinesOnly(parsedInput);

  console.log(onlyStraightLines);

  let usedPositions = [];
  let alreadyCounted = [];
  let countIntersects = 0;
  for (let line of onlyStraightLines) {
    let xRange = range(line.start.x, line.end.x);
    let yRange = range(line.start.y, line.end.y);

    for (let x of xRange) {
      for (let y of yRange) {
        let pos = { x: x, y: y };
        let alreadyThere = usedPositions.filter(availablePos => { return availablePos.x == x && availablePos.y == y }).length > 0;
        let isAlreadyCounted = alreadyCounted.filter(availablePos => { return availablePos.x == x && availablePos.y == y }).length > 0;
        if (alreadyThere) {
          if (!isAlreadyCounted) {
            countIntersects++;
          }
          alreadyCounted.push(pos);
        }
        else {
          usedPositions.push(pos);

        }
      }
    }
  }

  console.log(countIntersects);
  return countIntersects;
};

part1();