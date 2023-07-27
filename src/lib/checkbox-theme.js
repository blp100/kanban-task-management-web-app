import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const customCheckBox = definePartsStyle({
  container: {
    p: "3",
    bg: "lightGrey",
    _dark: {
      bg: "veryDarkGrey",
    },
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
