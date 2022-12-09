import { useEffect, useState } from "react";
import { FaFolder, FaRegFileVideo } from "react-icons/fa";
import useFileSystem from "../../hooks/useFileSystem";
import useInput from "../../hooks/useInput";
import DirectoryInfo from "../../model/DirectoryInfo";
import TreeItem from "../../model/TreeItem";
import raw from '../../puzzels/input7.txt';

const DaySeven = () => {
  const { input } = useInput(raw);
  const { root, directories } = useFileSystem(input);
  const [part1Result, setPart1Result] = useState<number>(0);
  const [part2Result, setPart2Result] = useState<number>(0);
  const [state, setState] = useState<any>({});
  const [cwd, setCwd] = useState<TreeItem>(root);

  const part1 = (directories: DirectoryInfo[]) => {
    let resultSize = 0;
    directories.forEach(x => {
      if (x.size < 100000) {
        resultSize += x.size;
      }
    });

    setPart1Result(resultSize);
  }

  const part2 = (directories: DirectoryInfo[], totalSize: number) => {
    const maxSize = 70000000; // 70 000 000
    const neededFreeSize = 30000000; // 30 000 000
    const currentFreeSize = maxSize - totalSize;
    const needToFreeUp = -1 * (currentFreeSize - neededFreeSize); // total - ? = 3

    setState({ totalSize, maxSize, neededFreeSize, currentFreeSize, needToFreeUp });

    const result = directories.sort((a, b) => a.size - b.size).filter(x => x.size >= needToFreeUp)[0];
    if (result !== undefined) {
      setPart2Result(result.size);
    }
  }

  const changeDir = (dir: TreeItem, name: string) => {
    const changeTo = dir.children.find(x => x.name === name);
    if (changeTo !== undefined) {
      setCwd(changeTo)
    }
  }

  const goBack = (dir: TreeItem) => {
    if (dir.parent !== null) {
      setCwd(dir.parent);
    }
  }

  const renderBackButton = (dir: TreeItem) => {
    {
      if (dir.parent) {
        return (
          <button onClick={() => goBack(dir)} className="button secondary tiny">back</button>
        )
      }
    }
  }

  const renderTree = (item: TreeItem) => {
    return (
      <div key={`${item.name}${item.size}`}>
        <p><FaFolder /> {item.name} <span style={{ fontSize: '0.8rem' }}>{item.size}</span> {renderBackButton(item)}</p>
        <ul >
          {item.children.sort((a, b) => a.isFile == b.isFile ? 0 : 1).map(x => {
            if (x.isFile) {
              return <div key={`${x.name}${x.size}`} ><p><FaRegFileVideo /> {x.name} <span style={{ fontSize: '0.8rem' }}>{x.size}</span></p></div>
            }
            else {
              return (
                <div key={`${x.name}${x.size}`} >
                  <button onClick={() => changeDir(item, x.name)} className="button secondary"><FaFolder /> {x.name} <span style={{ fontSize: '0.8rem' }}>{x.size}</span> </button>
                </div>
              )
            }
          })}
        </ul>
      </div >
    )
  }

  useEffect(() => {
    part1(directories);
    part2(directories, root.size);
  }, [directories, root]);

  return (
    <>
      <div className="grid-x">
        <h1 >Day 07</h1>
      </div>
      <div>
        <p>Input containing {input.length} lines</p>
        <p>Part1 <strong>{part1Result}</strong></p>
        <p>Part2 <strong>{part2Result}</strong></p>
        <p>{JSON.stringify(state)}</p>
      </div>
      <h1>Browse File System</h1>
      <button onClick={() => { setCwd(root) }} className="button">Init File System</button>
      {renderTree(cwd)}
    </>
  );
}

export default DaySeven;