import { styled } from "../../../stitches.config";

export const Base = styled("div", {
  "& p, & h1": {
    marginTop: "0",
    marginBottom: "0",
  },
  variants: {
    size: {
      h1: {
        "& *": {
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "80px",
        },
      },
      h2: {
        "& *": {
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "70px",
        },
      },
      h3: {
        "& *": {
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "60px",
        },
      },
      h4: {
        "& *": {
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "40px",
        },
      },
      body: {
        "& *": {
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "14px",
        },
      },
      bodyLarge: {
        "& *": {
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "20px",
        },
      },
    },
    weight: {
      bold: {
        "& *": {
          fontWeight: "bold",
        },
      },
      normal: {
        "& *": {
          fontWeight: "normal",
        },
      },
      lighter: {
        "& *": {
          fontWeight: "lighter",
        },
      },
    },
  },
});
