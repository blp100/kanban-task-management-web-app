"use client";
import {
  Box,
  CloseButton,
  Flex,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./logo";
import NavItem from "./nav-item";
import ThemeToggleSwitch from "./theme-toggle-switch";

const Sidebar = ({ onClose, linkItems, ...otherProps }) => {
  return (
    <Flex
      direction="column"
      transition="0.2s ease"
      bgColor={useColorModeValue("white", "darkGrey")}
      borderRight="1px"
      borderRightColor={useColorModeValue("lightLines", "darkLines")}
      minW="300px"
      pos="fixed"
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
        <NavItem key={link.name} pl={8}>
          {link.name}
        </NavItem>
      ))}
      <Spacer />
      <ThemeToggleSwitch borderRadius={6} />
    </Flex>
  );
};

export default Sidebar;
