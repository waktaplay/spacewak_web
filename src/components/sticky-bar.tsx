import { css } from "@emotion/react";

export default function StickyBar() {
  return <div css={stickyBarCss}></div>;
}

const stickyBarCss = css({
  width: "100vw",
  height: "70px",
  display: "flex",
  position: "sticky",
  bottom: 0,
  backdropFilter: "blur(18px)",
});
