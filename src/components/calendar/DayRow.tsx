import { grayScale } from "@/styles/colors";
import { TYPOGRAPHY } from "@/styles/typography";
import styled from "styled-components";

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  width: 100%;
  border-bottom: 1px solid ${grayScale[600]};
  user-select: none;
`;

const DayCell = styled.div<{ $gridColumnStart: number }>`
  padding: 8px 12px;
  border: none;
  text-align: left;
  grid-column-start: ${(props) => props.$gridColumnStart};

  & p {
    color: ${grayScale[50]};
    ${TYPOGRAPHY.label1}
    height: 16px;
  }
`;

export default function DayRow() {
  return (
    <DayGrid>
      <DayCell $gridColumnStart={1}>
        <p>일</p>
      </DayCell>
      <DayCell $gridColumnStart={2}>
        <p>월</p>
      </DayCell>
      <DayCell $gridColumnStart={3}>
        <p>화</p>
      </DayCell>
      <DayCell $gridColumnStart={4}>
        <p>수</p>
      </DayCell>
      <DayCell $gridColumnStart={5}>
        <p>목</p>
      </DayCell>
      <DayCell $gridColumnStart={6}>
        <p>금</p>
      </DayCell>
      <DayCell $gridColumnStart={7}>
        <p>토</p>
      </DayCell>
    </DayGrid>
  );
}
