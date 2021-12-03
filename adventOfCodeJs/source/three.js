import { getLines } from "./modules/input.js";

let inputValues = getLines("three");

function part1() {
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
}

function part2() {  
    let inputFor2 = getLines("three");
    let arrOxygen = inputFor2.slice()
    let arrCo2 = inputFor2.slice()
    let oxygen = getOxygen(arrOxygen, 0, 12);
    console.log(`oxygen:${oxygen}`); //010000111100

    let co2 = getCo2(arrCo2, 0, 12);
    console.log(`co2:${co2}`); //101011111001

    let result = parseInt(oxygen, 2) * parseInt(co2, 2);
    console.log(result);
}

function getOxygen(array, i, max){
    let countOne = 0;
    let countZero = 0;
    for(let bin of array){
        if (bin[i] == 0){
            countZero++;
        }
        else if(bin[i] == 1){
            countOne++;
        }
    }

    let occuresMore = countOne >= countZero ? 1 : 0;
    let newValues = array.filter(x => x[i] == occuresMore);

    if (newValues.length > 1){
        return getOxygen(newValues, ++i, max);
    }
    
    return newValues[0];
}

function getCo2(array, i, max){
    let countOne = 0;
    let countZero = 0;
    for(let bin of array){
        if (bin[i] == 0){
            countZero++;
        }
        else if(bin[i] == 1){
            countOne++;
        }
    }

    let occureLess = countZero <= countOne ? 0 : 1;
    let newValues = array.filter(x => x[i] == occureLess);

    if (newValues.length > 1){
        return getCo2(newValues, ++i, max);
    }
    
    return newValues[0];
}

part1();

part2(); // 3044956