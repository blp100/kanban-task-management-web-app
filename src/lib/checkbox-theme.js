import { checkboxAnatomy } from "@chakra-ui/anatomy";
import {
  border,
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const customCheckBox = definePartsStyle({
  container: {
    p: "3",
    bg: "lightGrey",
    borderRadius: "4px",
    _dark: {
      bg: "veryDarkGrey",
      _hover: {
        bg: "#635FC740",
      },
    },
  },
  control: {
    _checked: {
      bg: "mainPurple",
      color: "white",
      borderColor: "mainPurple",
      _hover: {
        bg: "mainPurpleHover",
        borderColor: "mainPurpleHover",
      },
    },
  },
  icon: {
    w: "10px",
    h: "8px",
  },
  label: {
    apply: "textStyles.bodyM",
    fontSize: "12px",
    color: "black",
    _checked: {
      textDecoration: "line-through",
      opacity: "0.5",
    },
    _dark: {
      color: "white",
    },
  },
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { customCheckBox },
});
