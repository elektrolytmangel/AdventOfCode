import { getLines } from "./modules/input.js";

let inputValues = getLines("fourTest");

const getBingoFields = () => {
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

    return bingoFields.filter(a => a.length != 0);
};

const getBingoNumbers = () => {
    return inputValues[0].split(',').map(x => parseInt(x));
}

const part1 = () => {
    let bingoNumbers = getBingoNumbers();
    let bingoFields = getBingoFields();

    // works only for horizontal rows
    for (let i = 0; i < bingoNumbers.length; i++) {
        let currentNumber = bingoNumbers[i];
        for (let field of bingoFields) {
            for (let row of field) {
                let horizontalRowCompletionRate = 0;
                let verticalRowCompletionRate = [0, 0, 0, 0, 0];
                let verticalRowCompleted = false;
                for (let number in row) {
                    if (row[number].n == currentNumber) {
                        row[number].c += 1;
                    }

                    if (row[number].c > 0) {
                        horizontalRowCompletionRate++;
                        verticalRowCompletionRate[number]++
                    }

                    verticalRowCompleted = verticalRowCompletionRate.find(x => x == 5) != null;

                    if (verticalRowCompleted) {
                        break;
                    }
                }

                if (horizontalRowCompletionRate == 5 || verticalRowCompleted) {
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
}


const part2 = () => {
    let bingoNumbers = getBingoNumbers();
    let bingoFields = getBingoFields();

    // works only for horizontal rows
    for (let i = 0; i < bingoNumbers.length; i++) {
        let currentNumber = bingoNumbers[i];
        for (let field in bingoFields) {
            for (let row of bingoFields[field]) {
                let horizontalRowCompletionRate = 0;
                let verticalRowCompletionRate = [0, 0, 0, 0, 0];
                let verticalRowCompleted = false;
                for (let number in row) {
                    if (row[number].n == currentNumber) {
                        row[number].c += 1;
                    }

                    if (row[number].c > 0) {
                        horizontalRowCompletionRate++;
                        verticalRowCompletionRate[number]++
                    }

                    verticalRowCompleted = verticalRowCompletionRate.find(x => x == 5) != null;

                    if (verticalRowCompleted) {
                        break;
                    }
                }

                if (horizontalRowCompletionRate == 5 || verticalRowCompleted) {
                    if (bingoFields.length > 1) {
                        bingoFields.splice(field, 1)
                    }
                    else {
                        let notHitNumbers = [];
                        bingoFields[field].forEach(n => n.forEach(e => {
                            if (e.c < 1) {
                                notHitNumbers.push(e.n);
                            }
                        }));

                        return currentNumber * notHitNumbers.reduce((a, b) => a + b);
                    }
                }
            }
        }
    }
}

let result = part1();
console.log(result)
let result2 = part2();
console.log(result2)