import axios from "axios";

class InputService {

  static loadInput(raw: any) {
    return fetch(raw)
      .then(r => r.text())
      .then(t => {
        return t.split('\n').map(line => line.trim());
      });
  }
}

// session=process.env.REACT_APP_AOC_SESSION
export default InputService;