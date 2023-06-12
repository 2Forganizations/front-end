import { flexBox } from "@/utils/flexBox";
import theme from "@/utils/theme";
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

interface TitleSize {
  default: string;
  medium: string;
  large: string;
}

interface LogoSize {
  default: number;
  medium: number;
  large: number;
}

const titleSize: TitleSize = {
  default: "1.1rem",
  medium: "1.5rem",
  large: "3rem",
};

const logoSize: LogoSize = {
  default: 12,
  medium: 18,
  large: 36,
};

interface KakaoLoginShortBtnProps {
  children: string;
  fontVariant: keyof TitleSize;
  padding?: string;
  logoVariant: keyof LogoSize;
}

const KakaoLoginShortBtn = ({
  children,
  fontVariant,
  padding,
  logoVariant,
}: KakaoLoginShortBtnProps) => {
  return (
    <Button
      css={{
        fontSize: titleSize[fontVariant],
        backgroundColor: theme.colors.kakaoYellow,
        padding,
        borderRadius: "2rem",
      }}
    >
      <LogoImg
        src={"/assets/icon/kakaoLogo.png"}
        alt="kakaoLogo"
        width={logoSize[logoVariant]}
        height={logoSize[logoVariant]}
      />
      {children}
    </Button>
  );
};

export default KakaoLoginShortBtn;

const Button = styled.button`
  ${flexBox("row", "between", "center")}
`;

const LogoImg = styled(Image)`
  margin-right: 1rem;
`;
