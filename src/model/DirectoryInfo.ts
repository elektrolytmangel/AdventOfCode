class DirectoryInfo {
  name: string = '';
  size: number = 0;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}

export default DirectoryInfo;