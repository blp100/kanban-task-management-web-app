"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ShowSidebarButton from "@/components/show-sidebar-button";
import { Box, Flex, Skeleton, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useData } from "@/app/dataProvider";

const Main = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const { dummyData } = useData();

  if (!dummyData) {
    return (
      <Flex minH="full" gap={2} p={2}>
        <Skeleton w="300px" h="100vh" />
        <Skeleton h="96px" w={"calc(100vw - 300px)"} />
      </Flex>
    );
  }

  return (
    <Box minH="full">
      <Sidebar isOpen={isOpen} onClose={onClose} linkItems={dummyData.boards} />
      <ShowSidebarButton onOpen={onOpen} />
      <Box
        display="block"
        ml={isOpen ? "300px" : "0px"}
        transition={"0.5s cubic-bezier(.07,.95,0,1) 0.15s"}
      >
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default Main;
