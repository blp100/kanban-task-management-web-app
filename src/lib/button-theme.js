import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  background: "mainPurple",
  color: "white",
  borderRadius: "full",
  _hover: {
    bg: "mainPurpleHover",
  },
});

const secondary = defineStyle({
  background: "#635FC71A",
  color: "mainPurple",
  borderRadius: "full",
  _hover: {
    bg: "#635FC740",
  },
  _dark: {
    bg: "white",
  },
});

const destructive = defineStyle({
  background: "red",
  color: "white",
  borderRadius: "full",
  _hover: {
    bg: "redHover",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary, destructive },
});
