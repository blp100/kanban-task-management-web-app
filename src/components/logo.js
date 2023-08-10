"use client";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Logo = ({ display, ...otherProps }) => {
  const logoImg = `/images/logo-${useColorModeValue("dark", "light")}.svg`;
  const logoMobileImg = "/images/logo-mobile.svg";
  return (
    <Image
      src={logoMobileImg}
      width={{ base: "24px", md: "153px" }}
      height={{ base: "25px", md: "26px" }}
      display={display}
      alt="logo"
      srcSet={`${logoMobileImg} 767w, ${logoImg}`}
      sizes="(max-width: 767px), (min-width: 768px)"
    />
  );
};

export default Logo;
