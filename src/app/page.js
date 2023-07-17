"use client";
import Navbar from "@/components/navbar";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <Navbar />
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "dark" : "light"}
      </Button>
      <Heading fontSize="9xl">Hello World!</Heading>
      <Text fontSize="3xl">Testing</Text>
    </Box>
    </>
  );
};

export default Home;
