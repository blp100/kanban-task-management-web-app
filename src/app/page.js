"use client";

import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useData } from "./dataProvider";
import { useEffect } from "react";
import MobileBoardModal from "@/components/mobile-board-modal";
import { NewBoardModal } from "@/components/modal";

const Home = () => {
  const { dummyData } = useData();
  const router = useRouter();
  const {
    isOpen: isOpenNewBoard,
    onOpen: onOpenNewBoard,
    onClose: onCloseNewBoard,
  } = useDisclosure();

  const pathName = dummyData?.boards[0]?.name;

  // add first router for demo
  useEffect(() => {
    if (dummyData && dummyData?.boards[0]?.name) {
      router.push(dummyData.boards[0].name);
    }
  }, [dummyData]);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignContent="center"
      height={"calc(100vh - 6rem)"}
      gap={8}
    >
      {pathName && (
        <Text textStyle="headingL" textAlign="center" color={"mediumGrey"}>
          Hi! Please select a board. <br />
          Or wait a moment.
          <br />
          Have a good day.
        </Text>
      )}
      {!pathName && (
        <Text textStyle="headingL" textAlign="center" color={"mediumGrey"}>
          Hi! There is no board <br />
          Please create a new one. <br />
          <br />
          <Button mx="auto" variant="primaryL" p={6} onClick={onOpenNewBoard}>
            + Add New Board
          </Button>
        </Text>
      )}
      <NewBoardModal isOpen={isOpenNewBoard} onClose={onCloseNewBoard} />
    </Box>
  );
};

export default Home;
