import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (pageType) => {
  const [isStart, setIsStart] = useState(false);
  const [min10, setMin10] = useState(0);
  const [min1, setMin1] = useState(0);
  const [sec10, setSec10] = useState(0);
  const [sec1, setSec1] = useState(0);
  const [nano, setNano] = useState(0);
  const [record, setRecord] = useState([]);

  const min10Ref = useRef(min10);
  const min1Ref = useRef(min1);
  const sec10Ref = useRef(sec10);
  const sec1Ref = useRef(sec1);
  const nanoRef = useRef(nano);

  useEffect(() => {
    min10Ref.current = min10;
    min1Ref.current = min1;
    sec10Ref.current = sec10;
    sec1Ref.current = sec1;
    nanoRef.current = nano;
  }, [min10, min1, sec10, sec1, nano]);

  const resetTimer = useCallback(() => {
    setIsStart(false);
    setMin10(0);
    setMin1(0);
    setSec10(0);
    setSec1(0);
    setNano(0);
    setRecord([]);
  }, []);

  useEffect(() => {
    resetTimer();
  }, [pageType]);

  const countDown = () => {
    if (nanoRef.current > 0) {
      setNano((prev) => prev - 1);
    } else if (sec1Ref.current > 0) {
      setSec1((prev) => prev - 1);
      setNano(9);
    } else if (sec10Ref.current > 0) {
      setSec10((prev) => prev - 1);
      setSec1(9);
      setNano(9);
    } else if (min1Ref.current > 0) {
      setMin1((prev) => prev - 1);
      setSec10(5);
      setSec1(9);
      setNano(9);
    } else if (min10Ref.current > 0) {
      setMin10((prev) => prev - 1);
      setMin1(9);
      setSec10(5);
      setSec1(9);
      setNano(9);
    } else {
      setIsStart(false);
    }
  };

  const countUp = () => {
    if (nanoRef.current < 9) {
      setNano((prev) => prev + 1);
      console.log(nano);
    } else if (sec1Ref.current < 9) {
      setSec1((prev) => prev + 1);
      setNano(0);
    } else if (sec10Ref.current < 5) {
      setSec10((prev) => prev + 1);
      setSec1(0);
      setNano(0);
    } else if (min1Ref.current < 9) {
      setMin1((prev) => prev + 1);
      setSec10(0);
      setSec1(0);
      setNano(0);
    } else if (min10Ref.current < 5) {
      setMin10((prev) => prev + 1);
      setMin1(0);
      setSec10(0);
      setSec1(0);
      setNano(0);
    } else {
      setIsStart(false);
    }
  };

  useEffect(() => {
    if (!isStart) return;

    const timer = setInterval(() => {
      if (pageType === "타이머") {
        countDown();
      } else {
        countUp();
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isStart, pageType]);

  const startHandler = () => {
    setIsStart(true);
  };

  const pauseHandler = () => {
    setIsStart(!isStart);
  };

  const plusHandler = () => {
    const time = `${min10}${min1}:${sec10}${sec1}:${nano}`;
    setRecord((prevRecord) => [...prevRecord, time]);
  };

  const stopHandler = resetTimer;

  return {
    min10,
    min1,
    sec10,
    sec1,
    nano,
    record,
    setMin10,
    setMin1,
    setSec10,
    setSec1,
    setNano,
    setRecord,
    startHandler,
    pauseHandler,
    plusHandler,
    stopHandler,
  };
};

export default useTimer;
