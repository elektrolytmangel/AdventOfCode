import { getLines } from "./modules/input.js";

let inputValues = getLines("four");

const part1 = () => {
    let bingoNumbers = inputValues[0].split(',').map(x => parseInt(x));
    let height = 5;
    let width = 5;
    let bingoFields = [];
    let currentField = []
    for (let i = 1; i < inputValues.length; i++) {
        let line = inputValues[i];
        if (line != null && line != '') {
            let currentLine = line.split(/\s/).filter(s => s != '').map(i => { return { n: parseInt(i), c: 0 } });
            currentField.push(currentLine);
        }
        else if (line == '') {
            bingoFields.push(currentField);
            currentField = [];
        }
    }

    bingoFields = bingoFields.filter(a => a.length != 0);

    // works only for horizontal rows
    for (let i = 0; i < bingoNumbers.length; i++) {
        let currentNumber = bingoNumbers[i];
        for (let field of bingoFields) {
            for (let row of field) {
                let rowCompletionRate = 0;
                for (let number of row) {
                    if (number.n == currentNumber) {
                        number.c += 1;
                    }

                    if (number.c > 0) {
                        rowCompletionRate++;
                    }
                }

                if (rowCompletionRate == 5) {
                    let notHitNumbers = [];
                    field.forEach(n => n.forEach(e => {
                        if (e.c < 1) {
                            notHitNumbers.push(e.n);
                        }
                    }));
                    return currentNumber * notHitNumbers.reduce((a, b) => a + b);
                }
            }
        }
    }

    console.log(0)
}

let result = part1();
console.log(result)