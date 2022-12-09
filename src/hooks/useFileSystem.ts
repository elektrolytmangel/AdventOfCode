import { useEffect, useState } from 'react';
import DirectoryInfo from "../model/DirectoryInfo";
import TreeItem from "../model/TreeItem";

const useFileSystem = (commands: string[]) => {
  const [result, setResult] = useState<TreeItem>(new TreeItem('/', false));
  const [directoryList, setDirectoryList] = useState<DirectoryInfo[]>([]);

  const processCommands = (input: string[]) => {
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

    calculateDirectorySizes(currentDirectory);
    const directories = listDirectories(currentDirectory);

    setDirectoryList(directories);
    setResult(currentDirectory);
  }

  const calculateDirectorySizes = (item: TreeItem): number => {
    let size = 0;
    const files = item.children.filter(x => x.isFile);
    const dirs = item.children.filter(x => !x.isFile);
    for (const f of files) {
      size += f?.size ?? 0;
    }

    for (const d of dirs) {
      if (d !== undefined) {
        size += calculateDirectorySizes(d);
      }
    }

    item.size = size;
    return size;
  }

  const listDirectories = (directory: TreeItem): DirectoryInfo[] => {
    const result: DirectoryInfo[] = [];
    for (const c of directory.children.filter(x => !x.isFile)) {
      const subDirectories = listDirectories(c);
      result.push(...subDirectories);
    }

    if (!directory.isFile) {
      result.push(directory);
    }

    return result;
  }

  useEffect(() => {
    processCommands(commands);
  }, [commands]);

  return { root: result, directories: directoryList };
}

export default useFileSystem;