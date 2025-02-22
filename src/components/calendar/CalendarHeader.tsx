import { grayScale } from "@/styles/colors";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid ${grayScale[600]};
`;

const YearAndMonth = styled.p`
  width: 120px;
  color: ${grayScale[50]};
`;

type Props = {
  month: number;
  year: number;
  onNext: () => void;
  onPrev: () => void;
  onClickCurrent: () => void;
};

export default function CalendarHeader({
  month,
  year,
  onNext,
  onPrev,
  onClickCurrent,
}: Props) {
  return (
    <Header>
      <YearAndMonth>
        {year}년 {month}월
      </YearAndMonth>

      <button type="button" onClick={onPrev}>
        이전
      </button>
      <button type="button" onClick={onNext}>
        다음
      </button>

      <button type="button" onClick={onClickCurrent}>
        오늘
      </button>
    </Header>
  );
}
