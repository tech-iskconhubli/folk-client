import React from "react";
import { Box, Text, Image,Button } from "@chakra-ui/react";
import image1 from "../../Assets/sosimage1.jpg";
import image2 from "../../Assets/sosimage2.png";
import image3 from "../../Assets/sosimage3.jpg";
import image4 from "../../Assets/sosimage4.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
const SecretOfSuccess = () => {
  const container=useRef()
  const heading=useRef()
  const regbutton=useRef()
  const { contextSafe } = useGSAP({scope: container});
  useGSAP(()=>{
  gsap.from(heading.current,{
    scale:0,
    opacity:0,
    duration:0.5})
  });
  const handlebuttonenter=contextSafe(()=>{
    gsap.to(regbutton.current,{scale:1.2,duration:0.1})
  });
  const handlebuttonleave=contextSafe(()=>{
    gsap.to(regbutton.current,{scale:1,duration:0.1})
  })
  return (
    <>
      <Box mt="150px" ref={container}>
        <Box backgroundImage={image1} w='100%' h='100vh' backgroundSize='cover' backgroundPosition='center'position='relative'>
        <Box position='absolute' fontSize='4rem' color='white' fontWeight='500' top='25%' left='8%' ref={heading}>Secret of Success
          <Box fontSize='1.5rem'><q>Self-Control is the mantra for Success</q></Box>
          <Button bg="#DE8D38" color='white' _hover={{bg:'#DE8D38'}} ref={regbutton} onMouseEnter={handlebuttonenter} onMouseLeave={handlebuttonleave}>Register now</Button>
        </Box>
        
        </Box>

        {/*  section1 */}
        <Box
          boxSizing="border-box"
          p="0"
          m="0"
          bg="#F0EAD6"
          h="600px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt='50px'
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "80%", xl: "60%" }}
            h="100%"
            display="flex"
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "30%", xl: "30%" }}
              h={{ base: "300px", md: "300px", lg: "600px", xl: "600px" }}
              backgroundImage={image2}
              backgroundSize={{
                base: "contain",
                md: "contain",
                lg: "cover",
                xl: "cover",
              }}
              backgroundPosition="center"
              order={{ base: "1", md: "1", lg: "2", xl: "2" }}
              backgroundRepeat="no-repeat"
            ></Box>

            <Box
              w={{ base: "100%", md: "100%", lg: "70%", xl: "70%" }}
              order={{ base: "2", md: "2", lg: "1", xl: "1" }}
              h="600px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="15px"
            >
              {/*  section1block1 */}
              <Box
                w="90%"
                h="140px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="#DE8D38"
                textAlign="justify"
                borderRadius="5px"
                fontSize={{ base: "0.8rem", md: "1rem" }}
              >
                {/* <Box>heading</Box> */}
                <Box w="70%" p="20px" color="white">
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                  </Text>
                </Box>
                <Box
                  w="30%"
                  h="140px"
                  backgroundImage={image4}
                  backgroundSize="cover"
                  borderRightRadius="5px"
                ></Box>
              </Box>
              {/*  section1block2 */}
              <Box
                w="90%"
                h="140px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="#DE8D38"
                textAlign="justify"
                borderRadius="5px"
                fontSize={{ base: "0.8rem", md: "1rem" }}
                order={{ base: "2", md: "2", lg: "1", xl: "1" }}
              >
                {/* <Box>heading</Box> */}
                <Box w="70%" p="20px" color="white">
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                  </Text>
                </Box>
                <Box
                  w="30%"
                  h="140px"
                  backgroundImage={image3}
                  backgroundSize="cover"
                  borderRightRadius="5px"
                ></Box>
              </Box>
              {/*  section1block3 */}
              <Box
                w="90%"
                h="140px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="#DE8D38"
                textAlign="justify"
                borderRadius="5px"
                fontSize={{ base: "0.8rem", md: "1rem" }}
                order={{ base: "2", md: "2", lg: "1", xl: "1" }}
              >
                {/* <Box>heading</Box> */}
                <Box w="70%" p="20px" color="white">
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                  </Text>
                </Box>
                <Box
                  w="30%"
                  h="140px"
                  backgroundImage={image4}
                  backgroundSize="cover"
                  borderRightRadius="5px"
                ></Box>
              </Box>
              {/*  section1block4 */}
              <Box
                w="90%"
                h="140px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="#DE8D38"
                textAlign="justify"
                borderRadius="5px"
                fontSize={{ base: "0.8rem", md: "1rem" }}
                order={{ base: "2", md: "2", lg: "1", xl: "1" }}
              >
                {/* <Box>heading</Box> */}
                <Box w="70%" p="20px" color="white">
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                  </Text>
                </Box>
                <Box
                  w="30%"
                  h="140px"
                  backgroundImage={image3}
                  backgroundSize="cover"
                  borderRightRadius="5px"
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* section2 */}
        <Box mt="100px">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              w={{ base: "90%", md: "90%", lg: "80%", xl: "60%" }}
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              gap="40px"
            >
              {/* section2block1 */}
              <Box
                display="flex"
                flexDirection={{
                  base: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                justifyContent="center"
                alignItems="center"
                w="100%"
                gap={{ base: "none", md: "1%", lg: "3%", xl: "3%" }}
              >
                <Box
                  w={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
                  h="235px"
                  borderTopRadius={{ base: "30px" }}
                  borderBottomRadius={{ base: "none", md: "30px" }}
                  backgroundImage={image3}
                  backgroundSize="cover"
                  backgroundPosition="center"
                ></Box>
                <Box
                  w={{ base: "100%", md: "60%", lg: "60%", xl: "60%" }}
                  h="235px"
                  borderTopRadius={{ base: "none", md: "30px" }}
                  borderBottomRadius={{ base: "30px" }}
                  bg="#DE8D38"
                  color="white"
                  p="25px"
                  textAlign="justify"
                  fontSize={{ base: "0.8rem", md: "1rem" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                  >
                    <Text
                      fontSize={{
                        base: "1rem",
                        md: "1rem",
                        lg: "1.5rem",
                        xl: "1.5rem",
                      }}
                    >
                      Hanna Tublin
                    </Text>
                    <br />
                    <Text>Doctor</Text>
                    <br />
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio, dolore. Laborum facilis voluptatum deserunt
                      doloremque sit temporibus hic, illo.Distinctio, dolore.
                    </Text>
                  </Box>
                </Box>
              </Box>
              {/* section2block2 */}
              <Box
                display="flex"
                flexDirection={{
                  base: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                justifyContent="center"
                alignItems="center"
                w="100%"
                gap={{ base: "none", md: "1%", lg: "3%", xl: "3%" }}
              >
                <Box
                  w={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
                  h="235px"
                  borderTopRadius={{ base: "30px" }}
                  borderBottomRadius={{ base: "none", md: "30px" }}
                  backgroundImage={image3}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  order={{ base: "1", md: "2", lg: "2", xl: "2" }}
                ></Box>
                <Box
                  w={{ base: "100%", md: "60%", lg: "60%", xl: "60%" }}
                  h="235px"
                  borderTopRadius={{ base: "none", md: "30px" }}
                  borderBottomRadius={{ base: "30px" }}
                  bg="#DE8D38"
                  color="white"
                  p="25px"
                  textAlign="justify"
                  fontSize={{ base: "0.8rem", md: "1rem" }}
                  order={{ base: "2", md: "1", lg: "1", xl: "1" }}
                >
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    flexDirection="column"
                  >
                    <Text
                      fontSize={{
                        base: "1rem",
                        md: "1rem",
                        lg: "1.5rem",
                        xl: "1.5rem",
                      }}
                    >
                      Hanna Tublin
                    </Text>
                    <br />
                    <Text>Doctor</Text>
                    <br />
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio, dolore. Laborum facilis voluptatum deserunt
                      doloremque sit temporibus hic, illo.Distinctio, dolore.
                    </Text>
                  </Box>
                </Box>
              </Box>
              {/* section2block3 */}
              <Box
                display="flex"
                flexDirection={{
                  base: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                justifyContent="center"
                alignItems="center"
                w="100%"
                gap={{ base: "none", md: "1%", lg: "3%", xl: "3%" }}
              >
                <Box
                  w={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
                  h="235px"
                  borderTopRadius={{ base: "30px" }}
                  borderBottomRadius={{ base: "none", md: "30px" }}
                  backgroundImage={image3}
                  backgroundSize="cover"
                  backgroundPosition="center"
                ></Box>
                <Box
                  w={{ base: "100%", md: "60%", lg: "60%", xl: "60%" }}
                  h="235px"
                  borderTopRadius={{ base: "none", md: "30px" }}
                  borderBottomRadius={{ base: "30px" }}
                  bg="#DE8D38"
                  color="white"
                  p="25px"
                  textAlign="justify"
                  fontSize={{ base: "0.8rem", md: "1rem" }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                  >
                    <Text
                      fontSize={{
                        base: "1rem",
                        md: "1rem",
                        lg: "1.5rem",
                        xl: "1.5rem",
                      }}
                    >
                      Hanna Tublin
                    </Text>
                    <br />
                    <Text>Doctor</Text>
                    <br />
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio, dolore. Laborum facilis voluptatum deserunt
                      doloremque sit temporibus hic, illo.Distinctio, dolore.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SecretOfSuccess;
