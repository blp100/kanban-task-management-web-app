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
      minW={60}
      pos="fixed"
      minH="100vh"
      px={8}
      {...otherProps}
    >
      <Flex h="20" alignItems="center">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Logo display={{ base: "none", md: "inline-block" }} />
        </Text>
        {/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} /> */}
      </Flex>
      <Box py={4} textStyle="headingS" color="mediumGrey">
        ALL BOARDS ({linkItems.length})
      </Box>
      {linkItems.map((link) => (
        <NavItem key={link.name}>{link.name}</NavItem>
      ))}
      <Spacer />
      <ThemeToggleSwitch />
    </Flex>
  );
};

export default Sidebar;
