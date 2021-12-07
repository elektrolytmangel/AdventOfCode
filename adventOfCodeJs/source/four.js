import { getLines } from "./modules/input.js";

let inputValues = getLines("four");

const part1 = () => {
    let bingoNumbers = inputValues[0].split(',').map(x => parseInt(x));
    let height = 4;
    let width = 4;
    let bingoFields = [];
    for (let i = 1; i < inputValues.length; i++) {
        let line = inputValues[i];
        if (line != null) {

        }
    }

    console.log(bingoNumbers);
}

part1();