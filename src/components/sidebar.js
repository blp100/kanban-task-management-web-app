"use client";
import {
  Box,
  CloseButton,
  Flex,
  Link,
  Slide,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./logo";
import NavItem from "./nav-item";
import ThemeToggleSwitch from "./theme-toggle-switch";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = ({ isOpen, onClose, linkItems, ...otherProps }) => {
  const [clickedItem, setClickedItem] = useState(null);
  const router = useRouter();

  const itemClickedHandler = (e) => {
    const pathName = e.target.innerText;
    setClickedItem(pathName);
    router.push(pathName)
  };

  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 10, width: "300px" }}>
      <Flex
        direction="column"
        bgColor={useColorModeValue("white", "darkGrey")}
        borderRight="1px"
        borderRightColor={useColorModeValue("lightLines", "darkLines")}
        w="300px"
        maxW="300px"
        pos="fixed"
        left={0}
        minH="100vh"
        {...otherProps}
      >
        <Box ml="34px" my={8} alignItems="center">
          <Logo display={{ base: "none", md: "inline-block" }} />
          {/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} /> */}
        </Box>
        <Box pl={8} my={5} textStyle="headingS" color="mediumGrey">
          ALL BOARDS ({linkItems.length})
        </Box>
        {linkItems.map((link) => (
          <NavItem key={link.name} pl={8} activated={clickedItem} onClick={itemClickedHandler}>
            {link.name}
          </NavItem>
        ))}
        <NavItem key="createBroad" pl={8} color="mainPurple">
          {"+ Create New Board"}
        </NavItem>
        <Spacer />
        <ThemeToggleSwitch borderRadius={6} />
        <NavItem
          onClick={onClose}
          key="hideSidebar"
          isHideItem={true}
          pl={8}
          mt={4}
          mb={12}
        >
          {"Hide Sidebar"}
        </NavItem>
      </Flex>
    </Slide>
  );
};

export default Sidebar;
