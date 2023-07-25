"use client";

import { Box, Button, Text } from "@chakra-ui/react";

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
        This board is empty. Create a new column to get started.
      </Text>
      <Button mx="auto" variant="primary" p={6}>
        + Add New Column
      </Button>
    </Box>
  );
};

export default Home;
