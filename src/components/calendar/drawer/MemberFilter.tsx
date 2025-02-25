import { grayScale } from "@/styles/colors";
import { TYPOGRAPHY } from "@/styles/typography";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 32px;
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

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
  background-color: aqua;
`;

const StyledText = styled.p`
  color: ${grayScale[400]};
  ${TYPOGRAPHY.bodyNormal3}
`;
export default function MemberFilter() {
  return (
    <Container>
      <HeaderSection>
        <Wrapper>
          <Icon></Icon> <StyledHeading>멤버 필터</StyledHeading>
        </Wrapper>
        <Icon></Icon>
      </HeaderSection>
      <StyledText>적용된 필터가 없습니다</StyledText>
      <CheckBoxWrapper></CheckBoxWrapper>
    </Container>
  );
}
