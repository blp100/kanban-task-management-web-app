"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ShowSidebarButton from "@/components/show-sidebar-button";
import { Box, useDisclosure } from "@chakra-ui/react";
import dummyData from "@/json/data.json";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/app/loading";

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
    return <Loading />;
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
