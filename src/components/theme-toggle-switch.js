import { Box, Flex, Spacer, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const ThemeToggleSwitch = ({ ...otherProps }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Box px="16" py="3.5" bgColor={useColorModeValue("lightGrey", "veryDarkGrey")} {...otherProps}>
      <Flex mx="auto" gap={4}>
        <Image
          src="/images/icon-light-theme.svg"
          width={16}
          height={16}
          alt="light theme icon"
        />
        <Switch onChange={toggleColorMode} isChecked={colorMode === "dark"} />
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
