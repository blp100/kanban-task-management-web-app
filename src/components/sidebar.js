import { Box, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import {getData} from "../lib/data";

const Sidebar = ({ onClose, ...otherProps }) => {
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...otherProps}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };

  export default Sidebar;