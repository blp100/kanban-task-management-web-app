"use client";

import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useData } from "./dataProvider";
import { useEffect } from "react";

const Home = () => {
  const { dummyData } = useData();
  const router = useRouter();

  // add first router for demo
  useEffect(() => {
    if (dummyData && dummyData.boards[0].name) {
      router.push(dummyData.boards[0].name);
    }
  }, [dummyData]);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignContent="center"
      height={"calc(100vh - 6rem)"}
      gap={8}
    >
      <Text textStyle="headingL" textAlign="center" color={"mediumGrey"}>
        Hi! Please select a board. <br />
        Have a good day.
      </Text>
    </Box>
  );
};

export default Home;
