"use client";
import {
  Box,
  Button,
  Flex,
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
    >
      <Logo display={{ base: "block", md: "none" }} />
      <Text
        p={8}
        textStyle={{ base: "headingS", md: "headingM", lg: "headingXL" }}
        color={useColorModeValue("black", "white")}
      >
        Platform Launch
      </Text>
      <Spacer />
      <Button variant="primary" textStyle="headingM" p={6}>
        + Add New Task
      </Button>
    </Flex>
  );
};

export default Header;
