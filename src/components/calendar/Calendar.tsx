"use client";

import { useState } from "react";
import styled from "styled-components";
import CalendarItem from "./CalendarItem";
import CalendarHeader from "./CalendarHeader";
import { grayScale } from "@/styles/colors";
import DayRow from "./DayRow";
import Drawer from "./drawer/Drawer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #191a1a;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  padding: 8px;
  border-bottom: 1px solid ${grayScale[600]};

  & p {
    margin: 0;
    font-size: 24px;
    color: ${grayScale[50]};
  }
`;

const ContentFlex = styled.div`
  display: flex;
  flex: 1;
`;

const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DateGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  width: 100%;
  background: ${grayScale[600]};
`;

export default function Calendar() {
  const now = new Date();

  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());

  return (
    <Container>
      <Header>
        <p>캘린더</p>
      </Header>
      <ContentFlex>
        <Drawer />
        <CalendarContainer>
          <CalendarHeader
            year={currentYear}
            month={currentMonth + 1}
            onPrev={() => {
              const date = new Date(currentYear, currentMonth, 0);
              setCurrentMonth(date.getMonth());
              setCurrentYear(date.getFullYear());
            }}
            onNext={() => {
              const date = new Date(currentYear, currentMonth + 2, 0);
              setCurrentMonth(date.getMonth());
              setCurrentYear(date.getFullYear());
            }}
            onClickCurrent={() => {
              setCurrentYear(now.getFullYear());
              setCurrentMonth(now.getMonth());
            }}
          />
          <DayRow />
          <DateGrid>
            {/* 달력 빈 부분 채우는 코드 */}
            {Array.from(
              {
                length: new Date(currentYear, currentMonth, 1).getDay(),
              },
              (v, i) =>
                new Date(
                  currentYear,
                  currentMonth,
                  i - new Date(currentYear, currentMonth, 0).getDay()
                )
            ).map((val) => (
              <CalendarItem
                key={`before ${currentMonth + 1}, ${val}`}
                date={val}
                isCurrentMonth={false}
              />
            ))}
            {/* Date에서 date부분에 0을 넣으면 이전 달의 마지막을 return */}
            {Array.from(
              {
                length: new Date(currentYear, currentMonth + 1, 0).getDate(),
              },
              (v, i) => new Date(currentYear, currentMonth, i + 1)
            ).map((val) => (
              <CalendarItem
                key={`${currentMonth + 1}월 ${val.getDate()}일`}
                date={val}
                isCurrentMonth={true}
              />
            ))}
            {/* 달력 빈 부분 채우는 코드 */}
            {Array.from(
              {
                length: 6 - new Date(currentYear, currentMonth + 1, 0).getDay(),
              },
              (v, i) => new Date(currentYear, currentMonth + 1, i + 1)
            ).map((val) => (
              <CalendarItem
                key={`after ${currentMonth + 1}, ${val}`}
                date={val}
                isCurrentMonth={false}
              />
            ))}
          </DateGrid>
        </CalendarContainer>
      </ContentFlex>
    </Container>
  );
}
