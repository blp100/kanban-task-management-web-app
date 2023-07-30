"use client";
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "./logo";
import { NewTaskModal } from "./modal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Flex
      alignItems="center"
      h={24}
      bgColor={useColorModeValue("white", "darkGrey")}
      borderBottom="1px"
      borderBottomColor={useColorModeValue("lightLines", "darkLines")}
      pl={6}
      pr={8}
      gap={6}
    >
      <Logo display={{ base: "block", md: "none" }} />
      <Text
        textStyle={{ base: "headingS", md: "headingM", lg: "headingXL" }}
        color={useColorModeValue("black", "white")}
      >
        Platform Launch
      </Text>
      <Spacer />
      <Button variant="primaryL" textStyle="headingM" p={6} onClick={onOpen}>
        + Add New Task
      </Button>
      <Menu variant="option">
        <MenuButton>
          <Image src="/images/icon-vertical-ellipsis.svg" w="5px" h="20px" alt="vertical ellipsis"/>
        </MenuButton>
        <MenuList>
          <MenuItem>Edit Board</MenuItem>
          <MenuItem textColor="red">Delete Board</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
    <NewTaskModal onClose={onClose} isOpen={isOpen}/>
    </>
  );
};

export default Header;
