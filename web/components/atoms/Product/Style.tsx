import { styled } from "../../../stitches.config";

export const ProductComp = styled("div", {
  borderRadius: "16px",
  border: "1px solid blue",

  height: "300px",
  position: "relative",
  overflow: "hidden",
  transition: "all .333s ease .1s",
  "&:hover": {
    cursor: "pointer",
    "& span": {
      opacity: "0.555",
      transform: "scale(0.95)",
    },
    "& .priceLabel": {
      opacity: "0.355",
    },
  },
});

export const ProductCompWrapper = styled("div", {
  zIndex: 1,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "white",
  padding: "6px 8px",
  opacity: "0.777",
  height: "100%",
  width: "100%",
});

export const PriceBlock = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  width: "100%",
  justifyContent: "space-between",
  "& p": {
    margin: "0",
  },
});

export const PriceLabel = styled("p", {
  fontSize: "40px",
  opacity: "0.1",
  color: "blue",
  fontWeight: "500",
  transition: "all .333s ease .1s",
});

export const Letter = styled("span", {
  position: "absolute",
  height: "100%",
  width: "100%",
  right: "0",
  bottom: "0",
  color: "blue",
  fontSize: "360px",
  lineHeight: "1",
  zIndex: "0",
  opacity: "0.133",
  textAlign: "right",
  transition: "all .333s ease .1s",
});
