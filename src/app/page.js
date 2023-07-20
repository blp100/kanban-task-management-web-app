"use client";
import Navbar from "@/components/navbar";
import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import dummyData from "../json/data.json";

import Sidebar from "@/components/sidebar";

const Home = () => {
  const toast = useToast();
  //fetch local data
  // console.log(dummyData.boards);

  return (
    <>
      <Box minH="full">
        <Sidebar linkItems={dummyData.boards} />
        <Box display="block" p={4} ml="300px">
          <Button
            onClick={() =>
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Show Toast
          </Button>
          {/* <Navbar /> */}
          <Heading fontSize="9xl">Hello World!</Heading>
          <Text fontSize="3xl">Testing</Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
