"use client";
import {
  Box,
  Flex,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

const ThemeToggleSwitch = ({ ...otherProps }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      px="16"
      py="3.5"
      m="auto"
      bgColor={useColorModeValue("lightGrey", "veryDarkGrey")}
      {...otherProps}
    >
      <Flex alignItems="center" m="auto" gap={6}>
        <Image
          src="/images/icon-light-theme.svg"
          width={19}
          height={19}
          alt="light theme icon"
        />
        <Switch
          onChange={toggleColorMode}
          variant="longer"
          isChecked={colorMode === "dark"}
        />
        <Image
          src="/images/icon-dark-theme.svg"
          width={16}
          height={16}
          alt="dark theme icon"
        />
      </Flex>
    </Box>
  );
};

export default ThemeToggleSwitch;
