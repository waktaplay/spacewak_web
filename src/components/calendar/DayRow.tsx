import { grayScale } from "@/styles/colors";
import styled from "styled-components";

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  width: 100%;
  border-bottom: 1px solid ${grayScale[600]};
`;

const DayCell = styled.div<{ gridColumnStart: number }>`
  padding: 8px;
  border: none;
  text-align: left;
  grid-column-start: ${(props) => props.gridColumnStart};
  color: ${grayScale[50]};
`;

export default function DayRow() {
  return (
    <DayGrid>
      <DayCell gridColumnStart={1}>일</DayCell>
      <DayCell gridColumnStart={2}>월</DayCell>
      <DayCell gridColumnStart={3}>화</DayCell>
      <DayCell gridColumnStart={4}>수</DayCell>
      <DayCell gridColumnStart={5}>목</DayCell>
      <DayCell gridColumnStart={6}>금</DayCell>
      <DayCell gridColumnStart={7}>토</DayCell>
    </DayGrid>
  );
}
