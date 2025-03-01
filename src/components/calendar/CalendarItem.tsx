import { grayScale, primary } from "@/styles/colors";
import { TYPOGRAPHY } from "@/styles/typography";
import styled from "styled-components";

const Item = styled.div<{ $gridColumnStart: number }>`
  padding: 9px;
  border: none;
  text-align: left;
  grid-column-start: ${(props) => props.$gridColumnStart};
  background: #191a1a;
`;

const DateText = styled.p<{ $isSunday: boolean; $isCurrentMonth: boolean }>`
  ${TYPOGRAPHY.label1}
  margin: 0 0 12px 0;
  padding: 0 3px;
  user-select: none;
  color: ${(props) =>
    props.$isCurrentMonth
      ? props.$isSunday
        ? primary
        : grayScale[50]
      : props.$isSunday
      ? "#74A580"
      : grayScale[400]};
  height: 16px;
`;

type Props = {
  date: Date;
  $isCurrentMonth: boolean;
};

export default function CalendarItem({ date, $isCurrentMonth }: Props) {
  return (
    <Item $gridColumnStart={date.getDay() + 1}>
      <DateText
        $isSunday={date.getDay() === 0}
        $isCurrentMonth={$isCurrentMonth}
      >
        {date.getDate()}
      </DateText>
    </Item>
  );
}
