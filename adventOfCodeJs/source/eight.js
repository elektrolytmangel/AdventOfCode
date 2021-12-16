import { getLines } from "./modules/input.js";

const zero = "abcefg";
const one = "cf";
const two = "acdeg";
const three = "acdfg";
const four = "bcdf";
const five = "abdfg";
const six = "abdefg";
const seven = "acf";
const eight = "abcdefg";
const nine = "abcdfg";

const inputValues = getLines("eightTest");

console.log("------  Eight -----");

const part1 = () => {
  let countInstances = 0;
  for (let line of inputValues) {
    let outputDigits = line.split("|")[1]; // "fdgacbe cefdb cefbgd gcbe"
    for (let digit of outputDigits.split(" ")) {
      let len = digit.length;
      if (len === 2 || len === 3 || len === 4 || len === 7) {
        countInstances++
      }
    }
  }

  console.log(`Part1: ${countInstances}`);
  return countInstances;
}

const findLetter = (originalNumber, encodedNumber, ledMapping) => {
  for (let t of originalNumber) {
    let newValues = encodedNumber.split('');
    //console.log(`${t}: ${encodedNumber.split('')}`);
    let currentVal = ledMapping.get(t);
    for (let l of currentVal.options) {
      if (currentVal.options.indexOf(l) < 0) {
        newValues.push(l);
      }
    }
    currentVal.options = newValues
    //ledMapping.set(t, );
  }
}

const countLetters = (decoding) => {
  let map = new Map([
    ["a", 0],
    ["b", 0],
    ["c", 0],
    ["d", 0],
    ["e", 0],
    ["f", 0],
    ["g", 0],
  ])
  for (let l of decoding) {
    if (l !== ' ') {
      let count = map.get(l)
      map.set(l, ++count);
    }
  }
  console.log(map)
  return map;
}

// key: 'a', value: ['c', 'f']

const part2 = () => {
  let result = 0;

  for (let line of inputValues) {
    let ledMapping = new Map([
      ["a", { result: null, options: [] }],
      ["b", { result: null, options: [] }],
      ["c", { result: null, options: [] }],
      ["d", { result: null, options: [] }],
      ["e", { result: null, options: [] }],
      ["f", { result: null, options: [] }],
      ["g", { result: null, options: [] }
      ]]); // key result-letter 'a'; value { result: 'b', options: ['b', 'c']}
    let decoding = line.split("|")[0]; // "fdgacbe cefdb cefbgd gcbe"
    let unifiedLetters = countLetters(decoding);
    for (let [key, value] of unifiedLetters.entries()) {
      switch (value) {
        case 6:
          //b
          ledMapping.set("b", { result: key, options: [] });
          break;
        case 4:
          // e
          ledMapping.set("e", { result: key, options: [] });
          break;
        case 9:
          //f
          ledMapping.set("f", { result: key, options: [] });
          break;
      }
    }

    for (let digit of decoding.split(" ")) {
      let len = digit.length;
      switch (len) {
        case 2:
          // one
          findLetter(one, digit, ledMapping);
          break;
        case 3:
          // seven
          findLetter(seven, digit, ledMapping);
          break;
        case 4:
          // four
          findLetter(four, digit, ledMapping);
          break;
        case 7:
          // eight
          findLetter(eight, digit, ledMapping);
          break;
      }
    }
    console.log(ledMapping);
  }

  console.log(`Part2: ${result}`);
  return result;
}

part1();
part2();
