import { flexBox } from "@/utils/flexBox";
import theme from "@/utils/theme";
import styled from "@emotion/styled";

export const Main = styled.div`
  ${flexBox("col", "", "center")};
  height: 100vh;
  padding: 1.5rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 46.4rem;
`;

export const GetUserInfoStep = styled.div`
  ${flexBox("row", "", "center")}
  margin-bottom: 6.6rem;
`;

export const ArrowImgBox = styled.div`
  width: 0.7rem;
  height: 1.2rem;
  position: relative;
  margin: 0 2rem;
`;

export const GetUserInfoIntro = styled.div`
  margin-bottom: 4rem;
`;

export const GetUserInfoIntroText = styled.div`
  color: ${theme.colors.gray3};
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 3.3rem;
`;

export const GetUserInfoProfile = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
`;

export const GetUserInfoProfileBox = styled.div`
  ${flexBox("row", "", "center")}
  border: 1px solid ${theme.colors.skyBlue};
  border-radius: 0.6rem;
  border-style: dashed;
  padding: 2rem 2.4rem;
`;

export const ProfileIcon = styled.div`
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;
  background-color: ${theme.colors.gray};
  border-radius: 50%;
`;

export const ProfileTextBox = styled.div`
  margin-bottom: 1.4rem;
`;

export const ProfileText = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

export const GetUserInfoNickName = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
`;
