import { extendTheme } from "@chakra-ui/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { mode } from "@chakra-ui/theme-tools";

const nextFont = Plus_Jakarta_Sans({
  weight: ["700", "500"],
  subsets: ["latin"],
});

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const fonts = {
  body: nextFont.style.fontFamily,
  heading: nextFont.style.fontFamily,
};

const theme = extendTheme({
  config,
  styles,
  fonts,
});

export default theme;
