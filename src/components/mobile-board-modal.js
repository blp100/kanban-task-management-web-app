import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import NavItem from "./nav-item";
import ThemeToggleSwitch from "./theme-toggle-switch";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NewBoardModal } from "./modal";

const MobileBoardModal = ({ isOpen, onClose, linkItems, ...otherProps }) => {
  const [clickedItem, setClickedItem] = useState(null);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setClickedItem(() => decodeURI(pathName).slice(1));
  }, []);

  const {
    isOpen: isOpenNewBoard,
    onOpen: onOpenNewBoard,
    onClose: onCloseNewBoard,
  } = useDisclosure();

  const itemClickedHandler = (e) => {
    const pathName = e.target.innerText;
    router.push(pathName);
    setClickedItem(pathName);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay mt={16} height={"calc(100vh - 4rem)"}/>
        <ModalContent
          mt={20}
          w="264px"
          maxW="264px"
          bg={useColorModeValue("white", "darkGrey")}
        >
          <ModalBody
            display="flex"
            flexDir="column"
            borderRadius={8}
            px={0}
            py={4}
            bgColor={useColorModeValue("white", "darkGrey")}
            w="264px"
            maxW="300px"
            {...otherProps}
          >
            <Box pl={8} mb={5} textStyle="headingS" color="mediumGrey">
              ALL BOARDS ({linkItems.length})
            </Box>
            {linkItems.map((link) => (
              <NavItem
                key={link.name}
                pl={8}
                activated={clickedItem}
                onClick={itemClickedHandler}
              >
                {link.name}
              </NavItem>
            ))}
            <NavItem
              key="createBroad"
              pl={8}
              color="mainPurple"
              onClick={() => {
                onClose();
                onOpenNewBoard();
              }}
            >
              + Create New Board
            </NavItem>
            <ThemeToggleSwitch borderRadius={6} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <NewBoardModal isOpen={isOpenNewBoard} onClose={onCloseNewBoard} />
    </>
  );
};

export default MobileBoardModal;
