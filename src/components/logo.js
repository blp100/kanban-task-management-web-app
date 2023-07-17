"use client";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const Logo = (props) => {
  const { display, ...otherProps } = props;
  const logoImg = `/images/logo-${useColorModeValue("dark", "light")}.svg`;
  const logoMobileImg = "/images/logo-mobile.svg";
  return (
    <Link href="/">
      <Image
        src={logoMobileImg}
        width={{ base: "24px", md: "153px" }}
        height={{ base: "25px", md: "26px" }}
        display={display}
        alt="logo"
        srcSet={`${logoMobileImg} 767w, ${logoImg} 768w`}
        sizes="(max-width: 767px), (min-width: 768px)"
      />
    </Link>
  );
};

export default Logo;
