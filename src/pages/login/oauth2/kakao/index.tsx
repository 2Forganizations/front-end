import axios from "axios";
import { useEffect } from "react";

const Oauth = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    const sendToken = async () => {
      try {
        const res = await axios.get(`http://3.36.128.53:8080/login/oauth2/kakao?code=${code}`);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    sendToken();
  }, []);
  return (
    <div>
      <h1>oauth페이지</h1>
      {/* <button onClick={sendToken}>버튼</button> */}
    </div>
  );
};

export default Oauth;
