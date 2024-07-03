import { Box, Button, Grid,Text, GridItem, HStack, Heading, Collapse, Card } from '@chakra-ui/react';
import React, { useState } from 'react';

import { GrYoga } from "react-icons/gr";
import { GiOvermind, GiSecretBook, GiWindyStripes } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdFestival } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';

const CustomBox = ({ children, ...props }) => (
  <Box
    transition="all 0.8s ease-in-out"
    {...props}
  >
    {children}
  </Box>
);

const AdminNavbar = () => {
  const [programmesShow, setProgrammesShow] = useState(false);
  const [artOfMind, setArtOfMind] = useState(false);
  const [secretsOfSucces, setSecretsOfSucces] = useState(false);
  const [residency, setResidency] = useState(false);
  const [donation, setDonation] = useState(false);
  const [trips, setTrips] = useState(false);
  const [festivals, setFestivals] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [gallery, setGallery] = useState(false);

  const handleToggle = (toggleFn) => {
    toggleFn(prevState => !prevState);
  }

  return (
    <Box  h="100vh" bg="#F5F7F8" color="black"> 
      <Box p={4} bg="" borderRadius="md">
        <Box><Heading fontSize={"34px"} m={"10px 0px"} textAlign={"center"} fontFamily={"body"} color="black"> Folk Vizag</Heading></Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
          <GridItem colSpan={2}>
            <Button
              p={"28px"}
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              color="black"
               _hover={{bgClip: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setProgrammesShow)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <GrYoga />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Yoga  Happiness</span>
                {programmesShow ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={programmesShow} animateOpacity>
              <CustomBox mt={2} ml={"80px"} >
                <NavLink className={({isActive})=>isActive?"activeLink":""} to={'/admin/yoga/createForm'}><Button width="80%">Add Event</Button></NavLink>
                <NavLink className={({isActive})=>isActive?"activeLink":""} to={"/admin/yoga/data"}><Button width="80%" mt={2}>Show Data</Button></NavLink>
              </CustomBox>
            </Collapse>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setArtOfMind)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <GiOvermind />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}> Mind Control</span>
                {artOfMind ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={artOfMind} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
                <Link to={'/admin/mindControl/createForm'}><Button width="100%">Add Event</Button></Link>
                <Link to={'/admin/MindControl/data'}><Button width="100%" mt={2}>Show Data</Button></Link>
              </CustomBox>
            </Collapse>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setSecretsOfSucces)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <GiSecretBook />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Secrets Success</span>
                {secretsOfSucces ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={secretsOfSucces} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
              <Link to={'/admin/secret/createForm'}><Button width="100%">Add Event</Button></Link>
                <Link to={'/admin/secret/data'}><Button width="100%" mt={2}>Show Data</Button></Link>
              </CustomBox>
            </Collapse>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setResidency)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <IoIosHome />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Residency</span>
                {residency ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={residency} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
               <Link to={'/admin/residency/createForm'}><Button width="100%">Add Event</Button></Link> 
               <Link to={'/admin/residency/data'}><Button width="100%" mt={2}>Show Data</Button></Link> 
              </CustomBox>
            </Collapse>
          </GridItem>

        

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setTrips)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <GiWindyStripes />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Trips</span>
                {trips ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={trips} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
              <Link to={'/admin/trips/createForm'}> <Button width="100%">Add Event</Button></Link> 
               <Link to={"/admin/trips/data"}><Button width="100%" mt={2}>Show Data</Button></Link> 
              </CustomBox>
            </Collapse>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setFestivals)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <MdFestival />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Festivals</span>
                {festivals ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={festivals} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
                <Link to={'/admin/festivals/createForm'}><Button width="100%">Add Event</Button></Link>
               <Link to={'/admin/festivals/data'}> <Button width="100%" mt={2}>Show Data</Button></Link> 
              </CustomBox>
            </Collapse>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setBlogs)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <TbLogs />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Blogs</span>
                {blogs ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={blogs} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
                <Button width="100%">Add Event</Button>
                <Button width="100%" mt={2}>Show Data</Button>
              </CustomBox>
            </Collapse>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setDonation)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <BiSolidDonateBlood />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Donation</span>
                {donation ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={donation} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
                <Button width="100%">Add Event</Button>
                <Button width="100%" mt={2}>Show Data</Button>
              </CustomBox>
            </Collapse>
          </GridItem>

          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
              onClick={() => handleToggle(setGallery)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <GrGallery />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Gallery</span>
                {gallery ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            <Collapse in={gallery} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
                <Button width="100%">Add Event</Button>
                <Button width="100%" mt={2}>Show Data</Button>
              </CustomBox>
            </Collapse>
          </GridItem>


          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
            
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <CgProfile />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Profile</span>
                 <IoIosArrowForward size={"23px"} />
              </HStack>
            </Button>
            {/* <Collapse in={gallery} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
                <Button width="100%">Add Event</Button>
                <Button width="100%" mt={2}>Show Data</Button>
              </CustomBox>
            </Collapse> */}
          </GridItem>



          <GridItem colSpan={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              bgColor="#eeeeee"
              p={"27px"}
              color="black"
               _hover={{ bgColor: 'blue.200', bgColor: 'lightgray', paddingY: '10px', p:"27px" }}
            //   onClick={() => handleToggle(setGallery)}
              cursor="pointer"
            >
              <HStack justifyContent="center" width="100%">
                <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"}   rounded='md' p={"9px"}>
                  <IoMdLogOut />
                </Box>
                <span style={{ textAlign: "center", flex: 1 }}>Log Out</span>
                {"" ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />}
              </HStack>
            </Button>
            {/* <Collapse in={gallery} animateOpacity>
              <CustomBox mt={2} ml={"80px"}>
                <Button width="100%">Add Event</Button>
                <Button width="100%" mt={2}>Show Data</Button>
              </CustomBox>
            </Collapse> */}
          </GridItem>


        </Grid>
      </Box>
      <Text ml={"80px"} mt={"30px"}><q> <i>Hare Krishna</i></q></Text>
    </Box>
  )
}

export default AdminNavbar;
