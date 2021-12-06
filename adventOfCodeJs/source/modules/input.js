import fs from 'fs'

export function getLines(day) {
    const input = fs.readFileSync(`source/input/${day}Input.txt`, 'utf-8');
    return input.split('\n').map(line => line.trim());
}