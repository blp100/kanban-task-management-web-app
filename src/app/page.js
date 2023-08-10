"use client";

import { Box, Text } from "@chakra-ui/react";

const Home = () => {
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
      {/* <Button mx="auto" variant="primaryL" p={6}>
        + Add New Column
      </Button> */}
    </Box>
  );
};

export default Home;
