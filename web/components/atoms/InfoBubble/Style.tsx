import { styled } from "../../../stitches.config";

export const Base = styled("div", {
  borderRadius: "20px",
  border: "1px solid #2936ff",
  color: "#2936ff",
  padding: "4px 8px",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "12px",
  "& p": {
    fontSize: "11px",
  },
  "& svg": {
    marginRight: "4px",
  },
  "& svg, & p": {
    userSelect: "none",
    cursor: "initial",
  },
  "@media(min-width: 425px)": {
    marginBottom: "0",
    "& p": {
      fontSize: "14px",
    },
  },
});
