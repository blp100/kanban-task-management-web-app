import { extendTheme } from "@chakra-ui/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { mode } from "@chakra-ui/theme-tools";
import { switchTheme } from "./swtich-theme";
import { buttonTheme } from "./button-theme";
import { menuTheme } from "./menu-theme";
import { checkboxTheme } from "./checkbox-theme";

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
    },
  }),
};

const textStyles = {
  headingXL: {
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "30px",
  },
  headingL: {
    fontSize: "19px",
    fontWeight: "bold",
    lineHeight: "23px",
  },
  headingM: {
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "19px",
  },
  headingS: {
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "15px",
    letterSpacing: "2.4px",
  },
  bodyL: {
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "23px",
  },
  bodyM: {
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "15px",
  },
};

const components = {
  Switch: switchTheme,
  Button: buttonTheme,
  Menu: menuTheme,
  Checkbox: checkboxTheme,
};

const theme = extendTheme({
  config,
  fonts,
  colors,
  styles,
  textStyles,
  components,
});

export default theme;
