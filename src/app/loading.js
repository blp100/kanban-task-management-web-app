"use client";

import { Box, Flex, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  const columns = ["l", "o", "a"];

  return (
    <Box>
      <Box
        display="flex"
        flexDir="column"
        height={"calc(100vh - 6rem)"}
        overflow="scroll"
        p={6}
      >
        <Flex gap={6}>
          {columns.map((column) => (
            <Skeleton
              key={column}
              flexDir="column"
              gap={5}
              w="280px"
              minW="280px"
              height={"calc(100vh - 12rem)"}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
