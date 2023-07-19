"use client";
import Navbar from "@/components/navbar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import dummyData from "../json/data.json";

import Sidebar from "@/components/sidebar";

const Home = () => {
  //fetch local data
  console.log(dummyData.boards);

  return (
    <>
      <Box minH="full">
        <Sidebar linkItems={dummyData.boards} />
        <Box display="block" p={4} ml={60}>
          {/* <Navbar /> */}
          <Heading fontSize="9xl">Hello World!</Heading>
          <Text fontSize="3xl">Testing</Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
