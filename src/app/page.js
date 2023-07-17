"use client";
import Logo from "@/components/logo";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </Button>
      <Heading fontSize="9xl">Hello World!</Heading>
      <Text fontSize="3xl">Testing</Text>
      <Logo />
    </Box>
  );
};

export default Home;
