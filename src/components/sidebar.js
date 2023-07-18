"use client";
import { Box, CloseButton, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Logo from "./logo";
import NavItem from "./nav-item";

const Sidebar = ({ onClose, linkItems, ...otherProps }) => {
  return (
    <Box
      display="block"
      transition="0.2s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      minW={60}
      minH="100vh"
      {...otherProps}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Logo display={{base:"none", md:"inline-block"}} />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem key={link.name}>{link.name}</NavItem>
      ))}
    </Box>
  );
};

export default Sidebar;
