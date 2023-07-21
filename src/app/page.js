"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ShowSidebarButton from "@/components/show-sidebar-button";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import dummyData from "../json/data.json";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  //fetch local data
  // console.log(dummyData.boards);

  return (
    <>
      <Box minH="full">
        <Sidebar
          isOpen={isOpen}
          onClose={onClose}
          linkItems={dummyData.boards}
        />
        <ShowSidebarButton onOpen={onOpen} />
        <Box display="block" p={4} ml="300px">
          {/* <Navbar /> */}
          <Heading fontSize="9xl">Hello World!</Heading>
          <Text fontSize="3xl">Testing</Text>
          <Button variant="primary">Click Me!</Button>
          <Button variant="secondary">Click Me!</Button>
          <Button variant="destructive">Click Me!</Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
