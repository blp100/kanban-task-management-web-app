"use client";
import { Flex, Link } from "@chakra-ui/react";

const NavItem = ({ icon, children, ...otherProps }) => {
  return (
    <Link
      display="block"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...otherProps}
      >
        {/* {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )} */}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
