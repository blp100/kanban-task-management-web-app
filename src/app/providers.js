"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "@/lib/theme";

export const Providers = ({ children }) => {
  return (
    // <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    // </CacheProvider>
  );
};
