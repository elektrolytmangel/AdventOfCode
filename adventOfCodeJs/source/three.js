import { getLines } from "./modules/input.js";

let inputValues = getLines("three");

let gammaRate = '';
let epsilonRate = '';
for(let i = 0; i < 12; i++) {
    let countOne = 0;
    let countZero = 0;
    for(let bin of inputValues){
        if (bin[i] == 0){
            countZero++;
        }
        else if(bin[i] == 1){
            countOne++;
        }
    }
    gammaRate += countZero > countOne ? 0 : 1;
    epsilonRate += countZero < countOne ? 0 : 1;
}

console.log(`gammaRate:${gammaRate}`)
console.log(`epsilonRate:${epsilonRate}`)

let decGamma = parseInt(gammaRate, 2);
let decEpsilon = parseInt(epsilonRate, 2);

let result = decGamma * decEpsilon;

console.log(result);