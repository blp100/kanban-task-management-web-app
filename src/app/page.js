"use client";
import Navbar from "@/components/navbar";
import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import dummyData from "../json/data.json";

// import Sidebar from "@/components/sidebar";

const Home = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  //fetch local data
  console.log(dummyData.boards.length);

  return (
    <>
      <Box>
        {/* <Sidebar /> */}
        <Navbar />
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
