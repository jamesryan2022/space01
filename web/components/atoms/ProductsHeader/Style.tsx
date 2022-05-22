import { styled } from "../../../stitches.config";

export const ProductsHeaderComp = styled("section", {
  position: "relative",
});

export const ProductsInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "36px",
  "@media(min-width: 425px)": {
    flexDirection: "row",
  },
});

export const ProductsText = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "0px",
  "& .copy-wrapper": {
    width: "100%",
    marginBottom: "18px",
  },
  "@media(min-width: 600px)": {
    "& .copy-wrapper": {
      width: "90%",
    },
  },
  "@media(min-width: 900px)": {
    "& .copy-wrapper": {
      width: "80%",
    },
  },
});
