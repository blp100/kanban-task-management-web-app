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
} from "@chakra-ui/react";
import Logo from "./logo";


const Header = () => {
  return (
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
      <Button variant="primary" textStyle="headingM" p={6}>
        + Add New Task
      </Button>
      <Menu variant="customMenu">
        <MenuButton><Image src="/images/icon-vertical-ellipsis.svg" /></MenuButton>
        <MenuList>
          <MenuItem>
            Edit Board
          </MenuItem>
          <MenuItem textColor="red">
            Delete Board
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
