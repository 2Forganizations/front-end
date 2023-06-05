import theme from "@/utils/theme";
import { css, SerializedStyles } from "@emotion/react";

interface TitleSize {
  default: string;
  medium: string;
  large: string;
}

const titleSize: TitleSize = {
  default: "1.1rem",
  medium: "1.5rem",
  large: "3rem",
};

interface KakaoLoginShortBtnProps {
  children: string;
  variant: keyof TitleSize;
}

const KakaoLoginShortBtn = ({ children, variant }: KakaoLoginShortBtnProps) => {
  return (
    <button
      css={{
        fontSize: titleSize[variant],
        backgroundColor: theme.colors.kakaoYellow,
      }}
    >
      {children}
    </button>
  );
};

export default KakaoLoginShortBtn;
