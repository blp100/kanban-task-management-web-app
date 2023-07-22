"use client";
import { Flex, Link, createIcon, useColorModeValue } from "@chakra-ui/react";

const IconBoard = createIcon({
  displayName: "IconBoard",
  viewBox: "0 0 16 16",
  d: "M0 2.889A2.889 2.889 0 012.889 0H13.11A2.889 2.889 0 0116 2.889V13.11A2.888 2.888 0 0113.111 16H2.89A2.889 2.889 0 010 13.111V2.89zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333zm8.445-1.333V1.333h-6.89A1.556 1.556 0 001.334 2.89v4.22h8.445zm4.889-1.333H11.11v4.444h3.556V5.778zm0 5.778H11.11v3.11h2a1.556 1.556 0 001.556-1.555v-1.555zm0-7.112V2.89a1.555 1.555 0 00-1.556-1.556h-2v3.111h3.556z",
});

const IconHideSidebar = createIcon({
  displayName: "IconHideSidebar",
  viewBox: "0 0 18 16",
  d: "M8.522 11.223a4.252 4.252 0 01-3.654-5.22l3.654 5.22zM9 12.25A8.685 8.685 0 011.5 8a8.612 8.612 0 012.76-2.864l-.86-1.23A10.112 10.112 0 00.208 7.238a1.5 1.5 0 000 1.524A10.187 10.187 0 009 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 019 12.25zm8.792-3.488a10.14 10.14 0 01-4.486 4.046l1.504 2.148a.375.375 0 01-.092.523l-.648.453a.375.375 0 01-.523-.092L3.19 1.044A.375.375 0 013.282.52L3.93.068a.375.375 0 01.523.092l1.735 2.479A10.308 10.308 0 019 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 010 1.524zM16.5 8a8.674 8.674 0 00-6.755-4.219A1.75 1.75 0 1012.75 5v-.001a4.25 4.25 0 01-1.154 5.366l.834 1.192A8.641 8.641 0 0016.5 8z",
});

const NavItem = ({ children, isHideItem, activated, ...otherProps }) => {
  const active = activated === children ? true : false;
  console.log(active);

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
        bg={active ? "mainPurple" : undefined}
        color={active ? "white" : "mediumGrey"}
        gap={4}
        _hover={useColorModeValue(
          {
            bg: "#635FC71A",
            color: "mainPurple",
          },
          {
            bg: "white",
            color: "mainPurple",
          }
        )}
        {...otherProps}
      >
        {isHideItem ? (
          <IconHideSidebar alt="Hide Sidebar Icon" />
        ) : (
          <IconBoard alt="Board Icon" />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
