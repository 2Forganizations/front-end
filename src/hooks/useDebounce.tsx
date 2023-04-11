import axios from "axios";
import { useEffect, useState } from "react";

// 디바운스 공통 함수입니다.
// 첫번째 파라미터로 input값을 두번째 파라미터로는 delay 시간, 세번째 파라미터로는 api 주소를 받습니다.
// 기존에 제가 사용하던 함수를 사용하는 것이라 value, url 부분 변경 가능성이 매우 높습니다.

const useDebounce = (value: string, delay: number, url: string) => {
  const [successData, setSuccessData] = useState<any>();
  useEffect(() => {
    // 지정한 딜레이 이후에 api요청
    const handler = setTimeout(async () => {
      try {
        const { data } = await axios.get(`${url}${value}`);
        setSuccessData(data);
      } catch (err) {
        // api 요청 실패시 초기화
        setSuccessData("");
      }
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return successData;
};

export default useDebounce;
