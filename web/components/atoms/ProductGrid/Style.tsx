import { styled } from "../../../stitches.config";

export const ProductGridComp = styled("section", {
  position: "relative",
});

export const GridList = styled("ul", {
  display: "grid",
  gap: "12px 18px",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto",
  "@media(min-width: 600px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media(min-width: 800px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
