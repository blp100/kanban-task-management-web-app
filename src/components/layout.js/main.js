"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ShowSidebarButton from "@/components/show-sidebar-button";
import {
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import dummyData from "@/json/data.json";

const Main = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
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
