"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ShowSidebarButton from "@/components/show-sidebar-button";
import { Box, Flex, Skeleton, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Main = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const fetchData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
  };

  const [dummyData, setDummyData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data when the component mounts
    fetchData().then((data) => {
      setDummyData(data);
    });
  }, []);

  if (!dummyData) {
    return (
      <Flex minH="full" gap={2} p={2}>
        <Skeleton w="300px" h="100vh" />
        <Skeleton h="96px" w={"calc(100vw - 300px)"} />
      </Flex>
    );
  }

  // Now you can use the dummyData object in your component
  console.log(dummyData);

  return (
    <Box minH="full">
      <Sidebar isOpen={isOpen} onClose={onClose} linkItems={dummyData.boards} />
      <ShowSidebarButton onOpen={onOpen} />
      <Box
        display="block"
        ml={isOpen ? "300px" : "0px"}
        transition={"0.5s cubic-bezier(.07,.95,0,1) 0.15s"}
      >
        <Header dummyData={dummyData ? dummyData : undefined} />
        {children}
      </Box>
    </Box>
  );
};

export default Main;
