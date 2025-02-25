import { grayScale } from "@/styles/colors";
import { TYPOGRAPHY } from "@/styles/typography";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 32px;
  border-bottom: 1px solid ${grayScale[600]};
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const StyledHeading = styled.h3`
  ${TYPOGRAPHY.bodyLarge1}
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
  background-color: aqua;
`;

export default function MySchedule() {
  return (
    <Container>
      <HeaderSection>
        <StyledHeading>MY 일정</StyledHeading>
        <Icon></Icon>
      </HeaderSection>
      <CheckBoxWrapper></CheckBoxWrapper>
    </Container>
  );
}
