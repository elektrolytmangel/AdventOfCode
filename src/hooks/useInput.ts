import { useEffect, useState } from "react";
import InputService from "../services/InputService";

const useInput = (raw: any) => {
  const [input, setInput] = useState<string[]>([]);

  useEffect(() => {
    InputService.loadInput(raw).then(r => setInput(r));
  }, [setInput, raw]);

  return { input };
}

export default useInput;