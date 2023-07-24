"use client";

import { Box, Text } from "@chakra-ui/react";

const Page = ({ params }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      height={"calc(100vh - 6rem)"}
      alignItems="center"
      justifyContent="center"
    >
      <Text textAlign="center" textStyle="headingL" color="mediumGrey">Router path id: {params.id}</Text>
    </Box>
  );
};

export default Page;
