import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const longer = definePartsStyle({
  track: {
    bg: "mainPurple",
    // let's also provide dark mode alternatives
  },
});

export const switchTheme = defineMultiStyleConfig({
  variants: { longer },
});
