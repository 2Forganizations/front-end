import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 10px;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
  input {
    outline: none;
  }
  a,
  a:visited {
    text-decoration: none;
    color: black;
  }
  &::-webkit-scrollbar {
    display: none;
    width: 10px;
    height: 10px;
    background: transparent;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
