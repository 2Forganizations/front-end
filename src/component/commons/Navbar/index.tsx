import React from "react";
import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Container>
      <Logo>OurServiceLogo</Logo>
      <MenuContainer>
        <a>공지사항</a>
      </MenuContainer>
      <RightWrapper>
        <button>회원가입</button>
        <button>로그인</button>
      </RightWrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.h1`
  width: 100%;
  height: 6rem;
  background-color: black;
  color: white;
  display: flex;
`;

const Logo = styled.div`
  width: 10%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;
const MenuContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  padding: 2rem;
  & a {
    color: white;
    width: 6rem;
    height: 100%;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
const RightWrapper = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    border: 1px solid white;
    color: white;
    width: 7rem;
    height: 4rem;
    margin-left: 2rem;
    cursor: pointer;
    border-radius: 0.4rem;
  }
`;
