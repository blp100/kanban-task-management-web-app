"use client";

import { Flex, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  return (
    <Flex minH="full" gap={2} p={2}>
      <Skeleton w="300px" h="100vh" />
      <Skeleton  h="96px" w={"calc(100vw - 300px)"}/>
    </Flex>
  );
}
