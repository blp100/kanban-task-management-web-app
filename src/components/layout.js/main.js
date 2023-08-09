"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ShowSidebarButton from "@/components/show-sidebar-button";
import { Box, Flex, Show, Skeleton, useDisclosure } from "@chakra-ui/react";
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
      <Show above="md">
        <Sidebar
          isOpen={isOpen}
          onClose={onClose}
          linkItems={dummyData.boards}
        />
        <ShowSidebarButton onOpen={onOpen} />
      </Show>
      <Box
        display="block"
        ml={isOpen ? { md: "260px", xl: "300px" } : "0px"}
        transition={"0.5s cubic-bezier(.07,.95,0,1) 0.15s"}
      >
        <Header isOpenSlider={isOpen} />
        {children}
      </Box>
    </Box>
  );
};

export default Main;
