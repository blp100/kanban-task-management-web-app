"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "@/lib/theme";

export const Providers = ({ children }) => {
  return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}  />
        {children}
      </ChakraProvider>
  );
};
