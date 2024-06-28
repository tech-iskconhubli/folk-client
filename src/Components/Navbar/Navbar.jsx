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
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {Link} from 'react-router-dom';
import logo from "./folk.png"
import {
  Box,
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
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);
  const [isOpenProgrammes, setIsOpenProgrammes] = useState(false);
  const [isHoveredAboutus, setIsHoveredAboutus] = useState(false);
  const [isHoveredProgrammes, setIsHoveredProgrammes] = useState(false);
  const HoverableListitem = ({ children }) => {
    const hoverableUnderline = useRef();
    const { contextSafe } = useGSAP({ scope: hoverableUnderline });
    const handleMouseEnter = contextSafe(() => {
      gsap.to(hoverableUnderline.current, {
        x: "0",
        backgroundColor: "#DE8D38",
        duration: "1",
        width: "100%",
      });
    });
    const handleMouseLeave = contextSafe(() => {
      gsap.to(hoverableUnderline.current, { duration: "1", width: "0" });
    });
    return (
      <Box>
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          _hover={{ color: "#DE8D38" }}
        >
          {children}
        </Box>
        <Box ref={hoverableUnderline} height="2px" width="0px"></Box>
      </Box>
    );
  };

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  function handleIsOpenAboutUs() {
    setIsOpenAboutUs(!isOpenAboutUs);
  }
  function handleIsOpenProgrammes() {
    setIsOpenProgrammes(!isOpenProgrammes);
  }
  function handleSetAboutUs() {
    setIsHoveredAboutus(true);
  }
  function handleUnsetAboutUs() {
    setIsHoveredAboutus(false);
  }
  function handleSetProgrammes() {
    setIsHoveredProgrammes(true);
  }
  function handleUnsetProgrammes() {
    setIsHoveredProgrammes(false);
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
         <Image src={logo}></Image>
         </Box>
         <Box
          display={{ base: "none", md: "flex" }}
          padding="15px"
          ml={{ md: "-5px", lg: "2%", xl: "5%" }}
          fontSize={{ md: "0.6rem", lg: "0.8rem", xl: "1.3rem" }}
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
                            <Link to='/about'>
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              AboutUs
                            </ListItem>
                            </Link>
                            <hr />
                            <Link to='/privacy-policy'>
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Privacy and Policy
                            </ListItem>
                            </Link>
                            <hr />
                            <Link to='/terms-and-conditions'>
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Terms and conditions
                            </ListItem>
                            </Link>
                          </Box>
                        )}
                        <hr />
                        <Link to='/blogs'>
                        <ListItem _hover={{ color: "#DE8D38" }}>Blogs</ListItem>
                        </Link>
                        <hr />
                        <Link to='/donation'>
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Donation
                        </ListItem>
                        </Link>
                        <hr />
                        <Link to='/festivals'>
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          {" "}
                          Festivals
                        </ListItem>
                        </Link>
                        <hr />
                        <Link to='/gallery'>
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Gallery
                        </ListItem>
                        </Link>
                        <hr />
                        <Link >
                        <ListItem _hover={{ color: "#DE8D38" }}>Home</ListItem>
                        </Link>
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
          overflow="hidden"
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
            <Box
              onMouseLeave={handleUnsetAboutUs}
              onMouseEnter={handleSetAboutUs}
              display="inline-block"
            >
              <ListItem>
                <HoverableListitem children="AboutUs" />
                <UnorderedList
                  className="submenu"
                  padding={{lg:'10px',xl:'20px'}}
                  fontSize={{lg:'0.8rem',xl:'1rem'}}
                  style={{
                    display: "block",
                    position: "absolute",
                    zIndex: "1",
                    backgroundColor: "white",
                    lineHeight: "2.5rem",
                    listStyleType: "none",
                    textAlign: "left",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    opacity: isHoveredAboutus ? "1" : "0",
                    visibility: isHoveredAboutus ? "visible" : "hidden",
                  }}
                >
                  <ListItem _hover={{ color: "#DE8D38" }}>AboutUs</ListItem>
                  <ListItem _hover={{ color: "#DE8D38" }}>
                    Privacy and Policy
                  </ListItem>
                  <ListItem _hover={{ color: "#DE8D38" }}>
                    Terms and Conditions
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </Box>
            <ListItem>
              <HoverableListitem children="Blogs" />
            </ListItem>
            <ListItem>
              <HoverableListitem children="Donation" />
            </ListItem>
            <ListItem>
              <HoverableListitem children="Festivals" />
            </ListItem>
            <ListItem>
              <HoverableListitem children="Gallery" />
            </ListItem>
            <ListItem>
              <HoverableListitem children="Home" />
            </ListItem>
            <Box
              onMouseLeave={handleUnsetProgrammes}
              onMouseEnter={handleSetProgrammes}
              display="inline-block"
            >
              <ListItem>
                <HoverableListitem children="Programmes" />
                <UnorderedList
                  className="submenu"
                  padding={{lg:'10px',xl:'20px'}}
                  fontSize={{lg:'0.8rem',xl:'1rem'}}
                  style={{
                    display: "block",
                    position: "absolute",
                    zIndex: "1",
                    backgroundColor: "white",
                    lineHeight: "2.5rem",
                    listStyleType: "none",
                    textAlign: "left",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    opacity: isHoveredProgrammes ? "1" : "0",
                    visibility: isHoveredProgrammes ? "visible" : "hidden",
                  }}
                >
                  <ListItem _hover={{ color: "#DE8D38" }}>
                    Yoga for Happiness
                  </ListItem>
                  <ListItem _hover={{ color: "#DE8D38" }}>
                    Art of Control
                  </ListItem>
                  <ListItem _hover={{ color: "#DE8D38" }}>
                    Secret of Success
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </Box>
            <ListItem>
              <HoverableListitem children="Residency" />
            </ListItem>
            <ListItem>
              <HoverableListitem children="Trips" />
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
