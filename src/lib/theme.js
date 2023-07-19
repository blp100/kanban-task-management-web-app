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

const fonts = {
  body: nextFont.style.fontFamily,
  heading: nextFont.style.fontFamily,
};

const colors = {
  mainPurple: "#635FC7",
  mainPurpleHover: "#A8A4FF",
  black: "#000112",
  veryDarkGrey: "#20212C",
  darkGrey: "#2B2C37",
  darkLines: "#3E3F4E",
  mediumGrey: "#828FA3",
  lightLines: "#E4EBFA",
  lightGrey: "#F4F7FD",
  red: "#EA5555",
  redHover: "#FF9898",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("lightGrey", "veryDarkGrey")(props),
      color: mode("gray.600", "gray.200")(props),
    },
  }),
};

const theme = extendTheme({
  config,
  fonts,
  colors,
  styles,
});

export default theme;
