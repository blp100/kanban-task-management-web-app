import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primaryL = defineStyle({
  bg: "mainPurple",
  color: "white",
  borderRadius: "full",
  fontSize: "15px",
  fontWeight: "700",
  _hover: {
    bg: "mainPurpleHover",
    _disabled: {
      bg: "mainPurple",
    },
  },
  _disabled: {
    opacity: "0.25",
  },
});

const primaryS = defineStyle({
  bg: "mainPurple",
  color: "white",
  borderRadius: "full",
  fontSize: "13px",
  fontWeight: "700",
  lineHeight: "23px",
  _hover: {
    bg: "mainPurpleHover",
  },
});

const secondary = defineStyle({
  bg: "#635FC71A",
  color: "mainPurple",
  borderRadius: "full",
  fontSize: "13px",
  fontWeight: "700",
  lineHeight: "23px",
  _hover: {
    bg: "#635FC740",
  },
  _dark: {
    bg: "white",
  },
});

const destructive = defineStyle({
  bg: "red",
  color: "white",
  borderRadius: "full",
  _hover: {
    bg: "redHover",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primaryL, primaryS, secondary, destructive },
});
