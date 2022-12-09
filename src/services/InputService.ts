class InputService {

  static loadInput(raw: any) {
    return fetch(raw)
      .then(r => r.text())
      .then(t => {
        return t.split('\n').map(line => line.trim());
      });
  }
}

export default InputService;