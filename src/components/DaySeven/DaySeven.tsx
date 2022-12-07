import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import TreeItem from "../../model/TreeItem";
import raw from '../../puzzels/input7.txt';
import rawTest from '../../puzzels/input7test.txt';
import { FaFolder, FaRegFileVideo } from "react-icons/fa";
import { max } from "rxjs";

let someSize: number = 0;
// 1 339 166, 1 243 729?
const DaySeven = () => {
  const { input } = useInput(raw);
  const { input: inputTest } = useInput(rawTest);
  const [part1Result, setPart1Result] = useState<number>(0);
  const [part2Result, setPart2Result] = useState<number>(0);
  const [rootTree, setRootTree] = useState<TreeItem>(new TreeItem('/', false));
  const [totalSize, setTotalSize] = useState<number>(0);
  const [state, setState] = useState<any>({});

  const calculateItem = (item: TreeItem): number => {
    let size = 0;
    const files = item.children.map(x => { if (x.children.length === 0) { return x; } });
    const dirs = item.children.map(x => { if (x.children.length > 0) { return x; } });
    for (const f of files) {
      size += f?.size ?? 0;
    }

    for (const d of dirs) {
      if (d !== undefined) {
        size += calculateItem(d);
      }
    }

    if (size < 100000 && item.children.length > 0) {
      someSize += size;
    }

    item.size = size;
    return size;
  }

  const part1 = (input: string[]) => {
    let currentDirectory: TreeItem = new TreeItem('/', false);

    for (const l of input) {
      const parts = l.split(' ');
      if (l.startsWith('$')) { // is cmd?
        // ignore ls
        if (parts.length === 3) {
          // $ cd x
          // $ cd ..
          if (parts[2] === '..') {
            // navigate outside
            currentDirectory = currentDirectory.parent ?? currentDirectory;
          }
          else { // cd
            // navigate in directory         
            currentDirectory = currentDirectory.children.find(x => x.name === parts[2]) ?? currentDirectory;
          }
        }
      }
      else {
        if (l.startsWith('dir')) {
          // add new directory
          const existing = currentDirectory.children.find(x => x.name === parts[1]);
          if (existing === undefined) {
            const dir = new TreeItem(parts[1], false);
            dir.parent = currentDirectory;
            currentDirectory?.children.push(dir);
          }
        } else {
          const file = new TreeItem(parts[1], true);
          file.size = parseInt(parts[0]);
          file.parent = currentDirectory;
          currentDirectory?.children.push(file);
        }
      }
    }

    // navigate to root
    while (currentDirectory.parent !== null) {
      currentDirectory = currentDirectory.parent;
    }

    //calculateItem(currentDirectory);
    setRootTree(currentDirectory);
    console.log(currentDirectory);
  }

  const flatenTree = (item: TreeItem): TreeItem[] => {
    const result: TreeItem[] = [];
    for (const c of item.children) {
      if (c.children.length > 0) {
        const subResult = flatenTree(c);
        result.push(...subResult);
      }
    }

    if (item.children.length > 0) {
      item.children.forEach(x => x.children = []);
      item.parent = null;
      result.push(...item.children);
      result.push(item);
    }
    return result;
  }

  const part2 = (rootTree: TreeItem, totalSize: number) => {
    let items: TreeItem[] = [];

    items = flatenTree(rootTree);

    const maxSize = 70000000; // 70 000 000
    const neededFreeSize = 30000000; // 30 000 000
    const currentFreeSize = maxSize - totalSize;
    const needToFreeUp = -1 * (currentFreeSize - neededFreeSize); // total - ? = 3

    setState({ totalSize, maxSize, neededFreeSize, currentFreeSize, needToFreeUp });

    const result = items.sort((a, b) => a.size - b.size).filter(x => !x.isFile && x.size >= needToFreeUp)[0];
    console.log(result)
    if (result !== undefined) {
      setPart2Result(result.size);
    }
  }

  useEffect(() => {
    someSize = 0;
    setPart1Result(0);
    const result = calculateItem(rootTree);
    setTotalSize(result);
    setPart1Result(someSize);
  }, [rootTree]);

  const renderTree = (item: TreeItem) => {
    return (
      <>
        <p><FaFolder /> {item.name} {item.size}</p>
        {item.children.map(x => {
          if (x.children.length == 0) {
            return <div><p><FaRegFileVideo /> {x.size} {x.name}</p></div>
          }
          else {
            return (
              <ul>
                {renderTree(x)}
              </ul>
            )
          }
        })}
      </>
    )
  }

  return (
    <>
      <div className="grid-x">
        <h1 >Day 07</h1>
        <button onClick={() => part1(inputTest)} className="button success">Part1 Test</button>
        <button onClick={() => part1(input)} className="button success">Part1</button>
        <button onClick={() => part2(rootTree, totalSize)} className="button success">Part2</button>
        <button onClick={() => setRootTree(new TreeItem('/', false))} className="button alert">Clear</button>
      </div>
      <div>
        <p>Input containing {input.length} lines</p>
        <p>Part1 <strong>{part1Result}</strong></p>
        <p>Part2 <strong>{part2Result}</strong></p>
        <p>{JSON.stringify(state)}</p>
      </div>
      {renderTree(rootTree)}
    </>
  );
}

export default DaySeven;