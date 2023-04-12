import { useEffect, useRef } from "react";

// 타이머용 공통 함수입니다.
// 첫번째 파라미터로 콜백함수를 두번째로 딜레이 시간을 받습니다.

const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<any>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 인터벌과 클리어 세팅
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
