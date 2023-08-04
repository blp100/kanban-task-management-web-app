"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "@/lib/theme";
import { DataProvider } from "./dataProvider";

export const Providers = ({ children }) => {
  return (
    // <CacheProvider>
    <ChakraProvider theme={theme}>
      <DataProvider>{children}</DataProvider>
    </ChakraProvider>
    // </CacheProvider>
  );
};
