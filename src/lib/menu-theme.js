import { menuAnatomy } from "@chakra-ui/anatomy";
import {
  border,
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/react";
import { color } from "framer-motion";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define custom variants
const variants = {
  option: {
    list: {
      // this will style the MenuList component
      borderRadius: "8px",
      border: "none",
      bg: "white",
      py: "2",
      _dark: {
        bg: "veryDarkGrey",
      },
    },
    item: {
      // this will style the MenuItem and MenuItemOption components
      apply: "textStyles.bodyL",
      color: "mediumGrey",
      bg: "white",
      py: "2",
      px: "4",
      _dark: {
        bg: "veryDarkGrey",
      },
    },
  },
  task: {
    button: {
      w: "full",
      border: "1px solid rgba(130, 143, 163, 0.25);",
      textAlign: "left",
      my: "0",
      px: "4",
      py: "2",
      flexDir: "row",
      apply: "textStyles.bodyL",
      borderRadius: "4",
      color: "black",
      _dark: {
        color: "white",
      },
    },
    list: {
      w: "416px",
      py: "2",
      borderRadius: "8px",
      border: "none",
      color: "Medium Grey",
      bg: "white",
      _dark: {
        bg: "veryDarkGrey",
      },
    },
    item: {
      // this will style the MenuItem and MenuItemOption components
      apply: "textStyles.bodyL",
      color: "mediumGrey",
      bg: "white",
      py: "2",
      px: "4",
      _dark: {
        bg: "veryDarkGrey",
      },
    },
  },
};

// export the custom variants in the component theme
export const menuTheme = defineMultiStyleConfig({ variants });
