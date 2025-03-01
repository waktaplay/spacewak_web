import { grayScale } from "@/styles/colors";
import { TYPOGRAPHY } from "@/styles/typography";
import Image from "next/image";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border-bottom: 1px solid ${grayScale[600]};
`;

const YearAndMonth = styled.p`
  ${TYPOGRAPHY.subHeading1}
  margin-right: 8px;
  width: 140px;
  height: 24px;
  color: ${grayScale[50]};
`;

const IconBtn = styled.button`
  margin: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:active {
    background: ${grayScale[800]};
  }
`;

const TodayBtn = styled.button`
  margin-left: 14px;
  height: 36px;
  padding: 0 16px;
  background: ${grayScale[700]};
  border-radius: 10px;
  border: none;
  outline: none;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  color: ${grayScale[100]};
  ${TYPOGRAPHY.bodyNormal2};

  &:active {
    background: ${grayScale[600]};
  }
`;

const HelpIcon = styled.div`
  margin-left: auto;
  width: 20px;
  height: 20px;
  cursor: pointer;
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

      <IconBtn type="button" onClick={onPrev}>
        <Image
          alt="chevron left"
          src="/static/images/icon/ic_chevron_left.svg"
          width={36}
          height={36}
        />
      </IconBtn>
      <IconBtn type="button" onClick={onNext}>
        <Image
          alt="chevron left"
          src="/static/images/icon/ic_chevron_right.svg"
          width={36}
          height={36}
        />
      </IconBtn>

      <TodayBtn type="button" onClick={onClickCurrent}>
        오늘
      </TodayBtn>

      <HelpIcon>
        <Image
          alt="help"
          src="/static/images/icon/ic_help.svg"
          width={20}
          height={20}
        />
      </HelpIcon>
    </Header>
  );
}
