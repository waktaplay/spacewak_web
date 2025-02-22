import { grayScale, primary } from "@/styles/colors";
import styled from "styled-components";

const Item = styled.div<{ gridColumnStart: number }>`
  border: none;
  text-align: left;
  grid-column-start: ${(props) => props.gridColumnStart};
  background: #191a1a;
`;

const DateText = styled.p<{ isSunday: boolean; isCurrentMonth: boolean }>`
  margin: 0;
  padding: 8px;
  color: ${(props) =>
    props.isCurrentMonth
      ? props.isSunday
        ? primary
        : grayScale[50]
      : props.isSunday
      ? "#74A580"
      : grayScale[400]};
`;

type Props = {
  date: Date;
  isCurrentMonth: boolean;
};

export default function CalendarItem({ date, isCurrentMonth }: Props) {
  return (
    <Item gridColumnStart={date.getDay() + 1}>
      <DateText isSunday={date.getDay() === 0} isCurrentMonth={isCurrentMonth}>
        {date.getDate()}
      </DateText>
    </Item>
  );
}
