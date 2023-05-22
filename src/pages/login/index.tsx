const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=b7d842453c8caa996a491df05f55dc7d&redirect_uri=http://localhost:3000/login/oauth2/kakao&response_type=code`;
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=9d7fd424bb1d0b7f986aa5f836a06ed6&redirect_uri=http://localhost:3000/oauth&response_type=code`;

  const handledLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
      <h1>로그인</h1>
      <button onClick={handledLogin}>로그인 버튼</button>
    </div>
  );
};

export default Login;
