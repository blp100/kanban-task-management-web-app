"use client";
import { Flex, Link, createIcon } from "@chakra-ui/react";

const IconBoard = createIcon({
  displayName: "IconBoard",
  viewBox: "0 0 16 16",
  d: "M0 2.889A2.889 2.889 0 012.889 0H13.11A2.889 2.889 0 0116 2.889V13.11A2.888 2.888 0 0113.111 16H2.89A2.889 2.889 0 010 13.111V2.89zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333zm8.445-1.333V1.333h-6.89A1.556 1.556 0 001.334 2.89v4.22h8.445zm4.889-1.333H11.11v4.444h3.556V5.778zm0 5.778H11.11v3.11h2a1.556 1.556 0 001.556-1.555v-1.555zm0-7.112V2.89a1.555 1.555 0 00-1.556-1.556h-2v3.111h3.556z",
});

const NavItem = ({ children, ...otherProps }) => {
  return (
    <Link
      display="block"
      mr={6}
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        h={12}
        borderRightRadius="full"
        role="group"
        cursor="pointer"
        textStyle="headingM"
        color="mediumGrey"
        _hover={{
          bg: "mainPurple",
          color: "white",
        }}
        {...otherProps}
        gap={4}
      >
        <IconBoard _hover={{ fill: "#ffffff" }} />
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
