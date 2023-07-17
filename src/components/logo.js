"use client";
import { Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  const logoImg = `/images/logo-${useColorModeValue("dark", "light")}.svg`;
  const logoMobileImg = "/images/logo-mobile.svg";
  return (
    <Link href="/">
      <Image
        src={logoMobileImg}
        width={["24px", "24px", "153px"]}
        height={["25px", "25px", "26px"]}
        alt="logo"
        srcSet={`${logoMobileImg} 767w, ${logoImg} 768w`}
        sizes="(max-width: 767px), (min-width: 768px)"
      />
    </Link>
  );
};

export default Logo;
