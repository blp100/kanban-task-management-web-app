"use client";
import { Box } from "@chakra-ui/react";
import Logo from "./logo";

const Navbar = () => {
  return (
    <Box>
      <Logo display={{ base: "inline-block", md: "none" }} />
    </Box>
  );
};

export default Navbar;
