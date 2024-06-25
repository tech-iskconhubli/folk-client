import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "./folk.png"
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
  const logo="./folk.png"
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered,setIsHovered]=useState(false);
  function handleMouseEnter(){
    setIsHovered(!isHovered);
  };
  function handleMouseLeave(){
    setIsHovered(!isHovered);
  };

  return (
    <Box as="navbar">
      <Box
        as="topnav"
        w="100%"
        bg="#DE8D38"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        color="white"
        height="50px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="100px"
        >
          <Box as="phonecall" display="flex" gap="5px">
            <MdOutlinePhoneCallback />
            <a href="tel:123-456-7890">123-456-7890</a>
          </Box>
          <Box as="timings" display="flex" gap="5px">
            {" "}
            <FaRegClock />
            Mon-Sat:<time>9:00-18:00</time>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="15px"
          fontSize='20px'
        >
          <Box>
            <FaTwitter />
          </Box>
          <Box>
            <FaPinterest />
          </Box>
          <Box>
            <FaFacebook />
          </Box>
          <Box>
            <FaInstagramSquare />
          </Box>
          <Box>
            <FaLinkedin />
          </Box>
        </Box>
      </Box>
      <Box
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      bg='white'
      w='100%'
      h='100px'
      fontWeight='400'
      >
        <Box>
         <Image src={logo}></Image>
         </Box>
         <Box
          display={{ base: "none", md: "flex" }}
          padding="15px"
          ml={{ md: "-5px", lg: "2%", xl: "5%" }}
          fontSize={{ md: "0.6rem", lg: "0.8rem", xl: "1.3rem" }}
          >
             <UnorderedList
            style={{
              listStyleType: "none",
              display: "flex",
              padding: "0",
              textAlign: "center",
            }}
            gap={{ md: "0.4rem", lg: "0.9rem", xl: "1.7rem" }}
          >
             <ListItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Menu>
                <MenuButton transition="all 0.5s" _hover={{ color: "#DE8D38"}} fontWeight='400' >
                 About Us
                </MenuButton>
                <MenuList
                  bg="white"
                  padding="15px"
                  mt="28px"
                  borderTop="2px solid #D69E2E"
                  fontSize="1rem"
                  lineHeight="2rem"
                >
                  <MenuItem _hover={{ color: "#DE8D38" }}>About Us</MenuItem>
                  <MenuItem _hover={{ color: "#DE8D38" }}>
                    Privacy Policy
                  </MenuItem>
                  <MenuItem _hover={{ color: "#DE8D38" }}>
                    Terms and Conditions
                  </MenuItem>
                </MenuList>
              </Menu>
            </ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Blogs</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Donation</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Festivals</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Gallery</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Home</ListItem>
            <ListItem>
              <Menu>
                <MenuButton transition="all 0.5s" _hover={{ color: "#DE8D38" }} fontWeight='400'>
                  Programmes
                </MenuButton>
                <MenuList
                  borderTopColor="#DE8D38"
                  bg="white"
                  padding="15px"
                  mt="28px"
                  borderTop="2px solid #DE8D38"
                  fontSize="1rem"
                  lineHeight="2rem"
                >
                  <MenuItem _hover={{ color: "#DE8D38" }}>
                    Yoga for Happiness
                  </MenuItem>
                  <MenuItem _hover={{ color: "#DE8D38" }}>
                    Art of Control
                  </MenuItem>
                  <MenuItem _hover={{ color: "#DE8D38" }}>
                    Secret of Success
                  </MenuItem>
                </MenuList>
              </Menu>
            </ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Residency</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Trips</ListItem>
          </UnorderedList>

         </Box>

      </Box>
    </Box>
  );
};

export default Navbar;
