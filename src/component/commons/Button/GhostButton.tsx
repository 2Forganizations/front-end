import { flexBox } from "@/utils/flexBox";
import theme from "@/utils/theme";
import styled from "@emotion/styled";

interface ColorVariant {
  default: string;
  gray: string;
  dark: string;
}

const borderColor: ColorVariant = {
  default: `${theme.colors.gray4}`,
  gray: `${theme.colors.gray5}`,
  dark: `${theme.colors.gray6}`,
};

const backgroundColor: ColorVariant = {
  default: "#ffffff",
  gray: `${theme.colors.backgroundGray}`,
  dark: `${theme.colors.backgroundGray2}`,
};

const fontColor: ColorVariant = {
  default: `${theme.colors.gray7}`,
  gray: `${theme.colors.gray8}`,
  dark: `${theme.colors.black3}`,
};

interface GhostButtonProps {
  children: string;
  padding?: string;
  borderColorVariant: keyof ColorVariant;
  backgroundColorVariant: keyof ColorVariant;
  fontColorVariant: keyof ColorVariant;
}

const GhostButton = ({
  children,
  padding,
  borderColorVariant,
  backgroundColorVariant,
  fontColorVariant,
}: GhostButtonProps) => {
  return (
    <Button
      css={{
        padding,
        border: `1px solid ${borderColor[borderColorVariant]}`,
        backgroundColor: backgroundColor[backgroundColorVariant],
        color: fontColor[fontColorVariant],
      }}
    >
      {children}
    </Button>
  );
};

export default GhostButton;

const Button = styled.button`
  ${flexBox("row", "center", "center")}
  border-radius: 0.4rem;
`;
