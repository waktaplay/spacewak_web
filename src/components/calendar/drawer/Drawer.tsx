import { grayScale } from "@/styles/colors";
import styled from "styled-components";
import DefaultFilter from "./DefaultFilter";
import MySchedule from "./MySchedule";
import MemberFilter from "./MemberFilter";

const Container = styled.div`
  width: 240px;
  border-right: 1px solid ${grayScale[600]};
`;

export default function Drawer() {
  return (
    <Container>
      <DefaultFilter />
      <MySchedule />
      <MemberFilter />
    </Container>
  );
}
