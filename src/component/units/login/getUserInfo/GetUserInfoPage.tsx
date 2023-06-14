import InfoStepBox from "@/component/commons/etc/InfoStepBox";
import * as S from "./GetUserInfoPageStyles";
import theme from "@/utils/theme";
import Image from "next/image";
import InfoStepTitleBox from "@/component/commons/etc/InfoStepTitleBox";
import GhostButton from "@/component/commons/Button/GhostButton";
const GetUserInfoPage = () => {
  return (
    <S.Main>
      <S.Container>
        <S.GetUserInfoStep>
          <InfoStepBox step="1" stepIconColor={theme.colors.mainBlue} fontColor="#ffffff">
            필수 정보 입력
          </InfoStepBox>
          <S.ArrowImgBox>
            <Image src={"/assets/icon/arrow.png"} alt="nextArrow" fill={true} />
          </S.ArrowImgBox>
          <InfoStepBox step="2" stepIconColor={theme.colors.gray} fontColor={theme.colors.gray2}>
            추가 정보 입력
          </InfoStepBox>
        </S.GetUserInfoStep>
        <S.GetUserInfoIntro>
          <S.GetUserInfoIntroText>반가워요, 민영님.</S.GetUserInfoIntroText>
          <S.GetUserInfoIntroText>
            서비스 이용에 필요한 정보를 입력해 주세요.
          </S.GetUserInfoIntroText>
        </S.GetUserInfoIntro>
        <S.GetUserInfoProfile>
          <InfoStepTitleBox>프로필 사진</InfoStepTitleBox>
          <S.GetUserInfoProfileBox>
            <S.ProfileIcon></S.ProfileIcon>
            <div>
              <S.ProfileTextBox>
                <S.ProfileText>최대 126*126px을 넘지 않아야 하며,</S.ProfileText>
                <S.ProfileText>2.5MB를 넘지 않는 png, jpg 파일이어야 합니다.</S.ProfileText>
              </S.ProfileTextBox>
              <GhostButton
                padding="1rem 1.8rem"
                borderColorVariant="default"
                backgroundColorVariant="default"
                fontColorVariant="default"
              >
                이미지 업로드
              </GhostButton>
            </div>
          </S.GetUserInfoProfileBox>
        </S.GetUserInfoProfile>
        <S.GetUserInfoProfile>
          <InfoStepTitleBox>닉네임</InfoStepTitleBox>
        </S.GetUserInfoProfile>
      </S.Container>
    </S.Main>
  );
};

export default GetUserInfoPage;

{
  /* <KakaoLoginShortBtn fontVariant="large" padding="20px 20px" logoVariant="large">
        로그인
      </KakaoLoginShortBtn> */
}
