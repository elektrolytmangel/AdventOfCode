import { getLines } from "./modules/input.js";

let inputValues = getLines("eight");

console.log("------  Eight -----");

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