import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="#D69E2E"
      w="100%"
      h="100px"
      bg="#0A0A0A"
      position="sticky"
      padding="20px"
    >
      <Image
        src="https://folknet.in/wp-content/uploads/2018/04/Main-Page-Logo-.png"
        alt="FOLK"
        height="60px"
        width="300px"
        marginLeft="20px"
      />
      <Box
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        fontSize="2rem"
        transition='all 0.5s'
      >
        <Menu>
          <MenuButton onClick={toggleMenu}>
            <IoMenu />
          </MenuButton>
          {isOpen && (
            <MenuList
              mt="25px"
              bg="black"
              padding="30px"
              fontSize="1rem"
              width="max-content"
              lineHeight="3rem"
              borderTop="2px solid #D69E2E"
            >
              <MenuItem _hover={{ color: "#F6E05E" }}>
                <Box display="flex" flexDirection="column" lineHeight="2rem">
                  <Box>About Us</Box>
                  <Box>
                    <UnorderedList
                      style={{
                        listStyleType: "none",
                        fontSize: "0.8rem",
                        paddingLeft: "15px",
                      }}
                    >
                      <ListItem>About Us</ListItem>
                      <ListItem>Privacy Policy</ListItem>
                      <ListItem>Terms and Conditions</ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem _hover={{ color: "#F6E05E" }}>Blogs</MenuItem>
              <MenuItem _hover={{ color: "#F6E05E" }}>Donation</MenuItem>
              <MenuItem _hover={{ color: "#F6E05E" }}>Festivals</MenuItem>
              <MenuItem _hover={{ color: "#F6E05E" }}>Gallery</MenuItem>
              <MenuItem _hover={{ color: "#F6E05E" }}>Home</MenuItem>
              <MenuItem>
                <Box display="flex" flexDirection="column" lineHeight="2rem">
                  <Box>Programmes</Box>
                  <Box>
                    <UnorderedList
                      style={{
                        listStyleType: "none",
                        fontSize: "0.8rem",
                        paddingLeft: "15px",
                      }}
                    >
                      <ListItem>Yoga for Happiness</ListItem>
                      <ListItem>Art of Control</ListItem>
                      <ListItem>Secret of Success</ListItem>
                    </UnorderedList>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem _hover={{ color: "#F6E05E" }}>Residency</MenuItem>
              <MenuItem _hover={{ color: "#F6E05E" }}>Trips</MenuItem>
            </MenuList>
          )}
        </Menu>
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        padding="15px"
        ml={{ md: "-5px", lg: "2%", xl: "5%" }}
        fontSize={{ md: "0.6rem", lg: "0.8rem", xl: "1.1rem" }}
      >
        <UnorderedList
          style={{
            listStyleType: "none",
            display: "flex",
            padding: "0",
            textAlign: "center",
          }}
          gap={{ md: "0.4rem", lg: "0.9rem", xl: "1.4rem" }}
        >
          <ListItem>
            <Menu>
              <MenuButton transition="all 0.5s" _hover={{ color: "#F6E05E" }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box>About Us</Box>
                  <FaChevronDown style={{ fontSize: "0.8rem" }} />
                </Box>
              </MenuButton>
              <MenuList
                borderTopColor="#D69E2E"
                bg="black"
                padding="15px"
                mt="28px"
                borderTop="2px solid #D69E2E"
                fontSize="1rem"
                lineHeight="2rem"
              >
                <MenuItem _hover={{ color: "#F6E05E" }}>About Us</MenuItem>
                <MenuItem _hover={{ color: "#F6E05E" }}>
                  Privacy Policy
                </MenuItem>
                <MenuItem _hover={{ color: "#F6E05E" }}>
                  Terms and Conditions
                </MenuItem>
              </MenuList>
            </Menu>
          </ListItem>
          <ListItem _hover={{ color: "#F6E05E" }}>Blogs</ListItem>
          <ListItem _hover={{ color: "#F6E05E" }}>Donation</ListItem>
          <ListItem _hover={{ color: "#F6E05E" }}>Festivals</ListItem>
          <ListItem _hover={{ color: "#F6E05E" }}>Gallery</ListItem>
          <ListItem _hover={{ color: "#F6E05E" }}>Home</ListItem>
          <ListItem>
            <Menu>
              <MenuButton transition="all 0.5s" _hover={{ color: "#F6E05E" }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Box>Programmes</Box>
                  <FaChevronDown style={{ fontSize: "0.8rem" }} />
                </Box>
              </MenuButton>
              <MenuList
                borderTopColor="#D69E2E"
                bg="black"
                padding="15px"
                mt="28px"
                borderTop="2px solid #D69E2E"
                fontSize="1rem"
                lineHeight="2rem"
              >
                <MenuItem _hover={{ color: "#F6E05E" }}>
                  Yoga for Happiness
                </MenuItem>
                <MenuItem _hover={{ color: "#F6E05E" }}>
                  Art of Control
                </MenuItem>
                <MenuItem _hover={{ color: "#F6E05E" }}>
                  Secret of Success
                </MenuItem>
              </MenuList>
            </Menu>
          </ListItem>
          <ListItem _hover={{ color: "#F6E05E" }}>Residency</ListItem>
          <ListItem _hover={{ color: "#F6E05E" }}>Trips</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );

  return (
    <>
        <Box >
            Navbar
        </Box>
    </>
  )
}

export default Navbar;
