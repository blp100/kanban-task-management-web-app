"use client";
import Navbar from "@/components/navbar";
import {
  Box,
  Drawer,
  DrawerContent,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import dummyData from "../json/data.json";

import Sidebar from "@/components/sidebar";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  //fetch local data
  // console.log(dummyData.boards);

  return (
    <>
      <Box minH="full">
        <Sidebar onClose={() => onClose} linkItems={dummyData.boards} />
        <Box display="block" p={4} ml="300px">
          {/* <Navbar /> */}
          <Heading fontSize="9xl">Hello World!</Heading>
          <Text fontSize="3xl">Testing</Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
