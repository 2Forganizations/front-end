import KakaoLoginShortBtn from "@/component/commons/Button/KakaoLoginShortBtn";
import * as S from "./GetUserInfoPageStyles";
const GetUserInfoPage = () => {
  return (
    <S.Main>
      <h1>Title</h1>
      <KakaoLoginShortBtn fontVariant="large" padding="20px 20px" logoVariant="large">
        로그인
      </KakaoLoginShortBtn>
    </S.Main>
  );
};

export default GetUserInfoPage;
