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
  let isIncrement = start < end;
  if (isIncrement) {
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
  }
  else {
    for (let i = start; i >= end; i--) {
      ans.push(i);
    }
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

const part2 = () => {
  let parsedInput = parseInputToObject();

  let usedPositions = [];
  for (let line of parsedInput) {
    let currentPoint = line.start;
    let x = currentPoint.x;
    let y = currentPoint.y;
    let xDict = usedPositions[x];
    if (xDict != null) {
      let yVal = xDict[y];
      yVal = yVal != null ? ++yVal : 1;
      xDict[y] = yVal;
      usedPositions[x] = xDict;
    }
    else {
      let newDict = {};
      newDict[y] = 1;
      usedPositions[x] = newDict;
    }
    while (currentPoint.x !== line.end.x || currentPoint.y !== line.end.y) {
      if (currentPoint.x < line.end.x) {
        currentPoint.x++;
      } else if (currentPoint.x > line.end.x) {
        currentPoint.x--;
      }
      if (currentPoint.y < line.end.y) {
        currentPoint.y++;
      } else if (currentPoint.y > line.end.y) {
        currentPoint.y--;
      }
      let x = currentPoint.x;
      let y = currentPoint.y;
      let xDict = usedPositions[x];
      if (xDict != null) {
        let yVal = xDict[y];
        yVal = yVal != null ? ++yVal : 1;
        xDict[y] = yVal;
        usedPositions[x] = xDict;
      }
      else {
        let newDict = {};
        newDict[y] = 1;
        usedPositions[x] = newDict;
      }
    }
  }

  let countIntersects = 0;
  for (let point of usedPositions) {
    for (let key in point) {
      let value = point[key];
      if (value > 1) {
        countIntersects++;
      }
    }
  }
  console.log(countIntersects);
  return countIntersects;
}

part1();

part2();