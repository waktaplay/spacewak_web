import { grayScale } from "@/styles/colors";
import { TYPOGRAPHY } from "@/styles/typography";
import { CheckBox } from "@waktaplay/ui";
import { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
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

const StyledHeading2 = styled.p`
  color: ${grayScale[300]};
  ${TYPOGRAPHY.bodyNormal3}
`;

export default function DefaultFilter() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Container>
      <StyledHeading>일정 보기</StyledHeading>
      <CheckBoxWrapper>
        <StyledHeading2>일정 종류</StyledHeading2>

        <CheckBox
          id="broadcast"
          text="방송"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <CheckBox
          id="contents"
          text="콘텐츠"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <CheckBox
          id="etc"
          text="기타"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </CheckBoxWrapper>
      <CheckBoxWrapper>
        <StyledHeading2>그룹별</StyledHeading2>

        <CheckBox
          id="woowakgood"
          text="우왁굳"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <CheckBox
          id="isedol"
          text="이세계 아이돌"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <CheckBox
          id="gomem"
          text="고정멤버"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <CheckBox
          id="academy"
          text="아카데미"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </CheckBoxWrapper>
    </Container>
  );
}
