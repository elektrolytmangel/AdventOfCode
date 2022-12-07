import { resourceLimits } from "worker_threads";

class TreeItem {
  parent: TreeItem | null = null;
  children: TreeItem[] = [];
  name: string = '';
  size: number = 0;
  isFile: boolean = false;

  constructor(name: string, isFile: boolean) {
    this.name = name;
    this.isFile = isFile;
  }

  exists(name: string): boolean {
    const result = this.children.find(x => x.name === name);
    return result !== null;
  }
}

export default TreeItem;