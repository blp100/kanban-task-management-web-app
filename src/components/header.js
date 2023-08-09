"use client";
import {
  Button,
  Divider,
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
import { DeleteBoardModal, EditBoardModal, NewTaskModal } from "./modal";
import { usePathname } from "next/navigation";
import { useData } from "@/app/dataProvider";

const Header = ({ isOpenSlider }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEditBoard,
    onOpen: onOpenEditBoard,
    onClose: onCloseEditBoard,
  } = useDisclosure();
  const {
    isOpen: isOpenDeleteBoard,
    onOpen: onOpenDeleteBoard,
    onClose: onCloseDeleteBoard,
  } = useDisclosure();

  const { dummyData } = useData();

  // Find Columns Data
  const pathName = usePathname();
  const obj = dummyData.boards.find(
    (o) => o.name === decodeURI(pathName).slice(1)
  );
  const columns = obj?.columns;

  const boardUUID = obj?.id;

  const columnsName = columns?.map((board) => board.name);

  return (
    <>
      <Flex
        alignItems="center"
        h={{ base: 16, md: 24 }}
        bgColor={useColorModeValue("white", "darkGrey")}
        borderBottom="1px"
        borderBottomColor={useColorModeValue("lightLines", "darkLines")}
        pl={{ base: 4, md: 6 }}
        pr={{ base: 4, md: 8 }}
        gap={{ base: 4, md: 6 }}
      >
        {!isOpenSlider && <Logo display={{ base: "none", md: "block" }} />}
        {!isOpenSlider && (
          <Divider
            display={{ base: "none", md: "block" }}
            orientation="vertical"
          />
        )}
        <Logo display={{ base: "block", md: "none" }} />
        <Text
          textStyle={{ base: "headingL", md: "headingL", xl: "headingXL" }}
          fontSize={{ base: "18px", md: "20px", xl: "30px" }}
          color={useColorModeValue("black", "white")}
        >
          {decodeURI(pathName).slice(1)}
        </Text>
        <Spacer />
        <Button
          variant="primaryL"
          textStyle="headingM"
          p={6}
          onClick={onOpen}
          isDisabled={!columnsName}
          display={{ base: "none", md: "flex" }}
        >
          + Add New Task
        </Button>
        <Button
          variant="primaryL"
          textStyle="headingM"
          px="18px"
          height="32px"
          onClick={onOpen}
          isDisabled={!columnsName}
          display={{ base: "flex", md: "none" }}
        >
          <Image
            src="/images/icon-add-task-mobile.svg"
            w="12px"
            h="12px"
            alt="vertical ellipsis"
          />
        </Button>
        <Menu variant="option">
          <MenuButton
            mx={-4}
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
            <MenuItem onClick={onOpenEditBoard}>Edit Board</MenuItem>
            <MenuItem textColor="red" onClick={onOpenDeleteBoard}>
              Delete Board
            </MenuItem>
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
          onClose={onCloseEditBoard}
          isOpen={isOpenEditBoard}
          boardUUID={boardUUID}
        />
      )}
      {boardUUID && (
        <DeleteBoardModal
          onClose={onCloseDeleteBoard}
          isOpen={isOpenDeleteBoard}
          title={pathName}
          boardUUID={boardUUID}
        />
      )}
    </>
  );
};

export default Header;
