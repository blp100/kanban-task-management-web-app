"use client";
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "./logo";
import { EditBoardModal, NewTaskModal } from "./modal";
import { usePathname } from "next/navigation";
import { useData } from "@/app/dataProvider";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEditTask,
    onOpen: onOpenEditTask,
    onClose: onCloseEditTask,
  } = useDisclosure();

  const { dummyData } = useData();

  // Find Columns Data
  const pathname = usePathname();
  const obj = dummyData.boards.find(
    (o) => o.name === decodeURI(pathname).slice(1)
  );
  const columns = obj?.columns;

  const boardUUID = obj?.id;

  const columnsName = columns?.map((board) => board.name);

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
        gap={2}
      >
        <Logo display={{ base: "block", md: "none" }} />
        <Text
          textStyle={{ base: "headingS", md: "headingM", lg: "headingXL" }}
          color={useColorModeValue("black", "white")}
        >
          Platform Launch
        </Text>
        <Spacer />
        <Button
          variant="primaryL"
          textStyle="headingM"
          p={6}
          onClick={onOpen}
          isDisabled={!columnsName}
        >
          + Add New Task
        </Button>
        <Menu variant="option">
          <MenuButton
            isDisabled={!boardUUID}
            as={Button}
            bg="none"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
          >
            <Image
              src="/images/icon-vertical-ellipsis.svg"
              w="5px"
              h="20px"
              alt="vertical ellipsis"
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onOpenEditTask}>Edit Board</MenuItem>
            <MenuItem textColor="red">Delete Board</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <NewTaskModal
        onClose={onClose}
        isOpen={isOpen}
        columnsName={columnsName ? columnsName : []}
      />
      {boardUUID && (
        <EditBoardModal
          onClose={onCloseEditTask}
          isOpen={isOpenEditTask}
          boardUUID={boardUUID}
        />
      )}
    </>
  );
};

export default Header;
