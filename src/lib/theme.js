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
  iris: "#635FC7",
  bilobaFlower: "#A8A4FF",
  jaguar: "#000112",
  dark: "#20212C",
  ebonyClay: "#2B2C37",
  brightGrey: "#3E3F4E",
  regentGrey: "#828FA3",
  lavenderMist: "#E4EBFA",
  zicron: "#F4F7FD",
  valentineRed: "#EA5555",
  lightSalmonPink: "#FF9898",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "ebonyClay")(props),
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
