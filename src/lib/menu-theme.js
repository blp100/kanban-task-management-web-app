import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define custom variants
const variants = {
  customMenu: {
    list: {
      // this will style the MenuList component
      borderRadius: "8px",
      border: "none",
      bg: "white",
      py:"2",
      _dark: {
        bg: "veryDarkGrey",
      }
    },
    item: {
      // this will style the MenuItem and MenuItemOption components
      apply: "textStyles.bodyL",
      color: "mediumGrey",
      bg: "white",
      py:"2",
      px:"4",
      _dark: {
        bg: "veryDarkGrey",
      }
    },
  },
};

// export the custom variants in the component theme
export const menuTheme = defineMultiStyleConfig({ variants });
