import { useEffect } from "react";

const Oauth = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
  }, []);
  return (
    <div>
      <h1>oauth페이지</h1>
    </div>
  );
};

export default Oauth;
