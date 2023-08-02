import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const modal = definePartsStyle({
  field: {
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "23px",
    border: "1px solid rgba(130, 143, 163, 0.25)",
    bg: "inherit",
    _invalid: {
      borderColor: "red",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { modal },
});
