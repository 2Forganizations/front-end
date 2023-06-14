import theme from "@/utils/theme";
import styled from "@emotion/styled";

interface IProps {
  children: string;
}

const InfoStepTitleBox = ({ children }: IProps) => {
  return (
    <Title>
      {children}
      <span style={{ color: theme.colors.red, lineHeight: "2rem" }}>*</span>
    </Title>
  );
};

export default InfoStepTitleBox;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 0.6rem;
`;
