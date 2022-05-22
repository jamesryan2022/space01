import { styled } from "../../../stitches.config";

export const Base = styled("div", {
  "& button": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: "4px 8px",
    background: "#2936ff",
    justifyContent: "space-between",
    border: "1px solid #2936ff",
    borderRadius: "12px",
    color: "#f5f5f5",
    transition: "all .333s ease .1s",
    "&:hover": {
      cursor: "pointer",
      background: "white",
      color: "#2936ff",
    },
  },
  "& svg": {
    marginRight: "4px",
  },
});
