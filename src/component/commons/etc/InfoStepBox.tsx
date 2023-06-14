import { flexBox } from "@/utils/flexBox";
import theme from "@/utils/theme";
import styled from "@emotion/styled";

interface IProps {
  children: string;
  step: string;
  stepIconColor: string;
  fontColor: string;
}

const InfoStepBox = ({ children, step, stepIconColor, fontColor }: IProps) => {
  return (
    <Container>
      <StepIcon css={{ backgroundColor: stepIconColor, color: fontColor }}>{step}</StepIcon>
      {children}
    </Container>
  );
};

export default InfoStepBox;

const Container = styled.div`
  ${flexBox("row", "center", "center")}
  color: ${theme.colors.black2};
  font-weight: 600;
  font-size: 1.3rem;
`;

const StepIcon = styled.div`
  ${flexBox("row", "center", "center")}
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  margin-right: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
`;
