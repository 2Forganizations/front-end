// axios header에 토큰을 담아야 할 때 사용하는 함수 모듈화
import axios from "axios";

// axios.create로 instance 생성
const instance = axios.create({
  baseURL: "http://", // api url 추후 입력
});

// interceptor를 이용하여 요청시 토큰 첨부
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("");
  // 토큰이 있을 경우
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
