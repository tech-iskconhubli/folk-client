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
import logo from "./folk.png";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  UnorderedList,
  ListItem,
  Image,
  DrawerCloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
} from "@chakra-ui/react";
gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const hoverableUnderline=useRef();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);
  const [isOpenProgrammes, setIsOpenProgrammes] = useState(false);
  const { contextSafe } = useGSAP({ scope: hoverableUnderline });
  const  handleMouseEnter=contextSafe(()=>{
    gsap.to(hoverableUnderline.current,{x:'0',backgroundColor:'#DE8D38',duration:'1',width:'100%'})
  });
  const  handleMouseLeave=contextSafe(()=>{
    gsap.to(hoverableUnderline.current,{duration:'1',width:'0'})
  });

 
  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  function handleIsOpenAboutUs() {
    setIsOpenAboutUs(!isOpenAboutUs);
  }
  function handleIsOpenProgrammes() {
    setIsOpenProgrammes(!isOpenProgrammes);
  }

  return (
   <Box position="fixed" top="0" zIndex="1" width="100%"> 
      {/*  */}
      {/*Desktop navbar*/}
      <Box
        w="100%"
        bg="#DE8D38"
        display={{ base: "none", md: "none", lg: "flex" }}
        justifyContent="space-around"
        alignItems="center"
        color="white"
        height="50px"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          gap="50px"
        >
          <Box
            display="flex"
            gap="5px"
            justifyContent="center"
            alignItems="center"
          >
            <MdOutlinePhoneCallback />
            <a href="tel:123-456-7890">123-456-7890</a>
          </Box>
          <Box
            display="flex"
            gap="5px"
            justifyContent="center"
            alignItems="center"
          >
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
          fontSize="20px"
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
        display="flex"
        justifyContent={{
          base: "space-between",
          md: "space-between",
          lg: "center",
          xl: "center",
        }}
        alignItems="center"
        bg="white"
        w="100%"
        h="100px"
        fontWeight="400"
        position="sticky"
      >
        <Box>
          <Image
            src={logo}
            alt="FOLK"
            height="60px"
            width={{ base: "250px", md: "300px", lg: "300px", xl: "300px" }}
            ml={{ base: "15px", md: "50px" }}
            bg="black"
          />
        </Box>
        <Box
          display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
          alignItems="center"
          fontSize="2rem"
          transition="all 0.5s"
          zIndex="2"
        >
          <Box
            onClick={handleToggleMenu}
            marginRight={{ base: "15px", md: "50px" }}
          >
            {" "}
            <IoMenu style={{ color: "#DE8D38" }} />
            <Drawer
              isOpen={toggleMenu}
              placement="right"
              onClose={handleToggleMenu}
              cursor="pointer"
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>FOLK</DrawerHeader>
                  <DrawerBody>
                    <Box spacing={8}>
                      <UnorderedList
                        style={{
                          listStyleType: "none",
                          lineHeight: "3rem",
                          cursor: "pointer",
                        }}
                      >
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            onClick={handleIsOpenAboutUs}
                          >
                            <Box>AboutUs</Box>
                            <Box>
                              <FaChevronDown fontSize="10px" />
                            </Box>
                          </Box>
                        </ListItem>
                        {isOpenAboutUs && (
                          <Box>
                            <hr />
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              AboutUs
                            </ListItem>
                            <hr />
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Privacy and Policy
                            </ListItem>
                            <hr />
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Terms and conditions
                            </ListItem>
                          </Box>
                        )}
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>Blogs</ListItem>
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Donation
                        </ListItem>
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          {" "}
                          Festivals
                        </ListItem>
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Gallery
                        </ListItem>
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>Home</ListItem>
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            onClick={handleIsOpenProgrammes}
                          >
                            <Box>Programmes</Box>
                            <Box>
                              <FaChevronDown fontSize="10px" />
                            </Box>
                          </Box>
                        </ListItem>
                        {isOpenProgrammes && (
                          <Box>
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Yoga for Happiness
                            </ListItem>
                            <hr />
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Art of Control
                            </ListItem>
                            <hr />
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Secret of Success
                            </ListItem>
                          </Box>
                        )}
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Residency
                        </ListItem>
                        <hr />
                        <ListItem _hover={{ color: "#DE8D38" }}>Trips</ListItem>
                      </UnorderedList>
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Box>
        </Box>

        <Box
          display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          padding="15px"
          fontSize={{ lg: "0.6rem", xl: "1rem" }}
        >
          <UnorderedList
            style={{
              listStyleType: "none",
              display: "flex",
              padding: "0",
              textAlign: "center",
              overflow: "hidden",
              cursor: "pointer",
              marginLeft: "35px",
            }}
            gap={{ md: "0.4rem", lg: "0.5rem", xl: "1.5rem" }}
          >
            <ListItem onMouseEnter={handleMouseEnter} _hover={{color:'#DE8D38'}} onMouseLeave={handleMouseLeave}>
              AboutUs
              <Box ref={hoverableUnderline} height='2px' width='0px'></Box>
            </ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Blogs</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Donation</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Festivals</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Gallery</ListItem>
            <ListItem _hover={{ color: "#DE8D38" }}>Home</ListItem>
            <ListItem>
              <Menu>
                <MenuButton
                  transition="all 0.5s"
                  _hover={{ color: "#DE8D38" }}
                  fontWeight="400"
                >
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
