import React from "react";
import theme from "../../theme";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import image from "../../Assets/sosimage2.png";
import sideimage1 from "../../Assets/sosimage4.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
const SecretofSuccessSection2 = () => {
  return (
    <>
      {/* section2 */}
      <Box
        boxSizing="border-box"
        p="0"
        m="0"
        bg={theme.colors.col.primary}
        h="600px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="50px"
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
            backgroundImage={image}
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
              <Box w="70%" p="20px" color="white">
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                </Text>
              </Box>
              <Box
                w="30%"
                h="140px"
                backgroundImage={sideimage1}
                backgroundSize="cover"
                borderRightRadius="5px"
              ></Box>
            </Box>
          </Box>
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
            <Box w="70%" p="20px" color="white">
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                dolorum quae at neque labore! Rem dolor modi fugiat
              </Text>
            </Box>
            <Box
              w="30%"
              h="140px"
              backgroundImage={sideimage1}
              backgroundSize="cover"
              borderRightRadius="5px"
            ></Box>
          </Box>

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
            <Box w="70%" p="20px" color="white">
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                dolorum quae at neque labore! Rem dolor modi fugiat
              </Text>
            </Box>
            <Box
              w="30%"
              h="140px"
              backgroundImage={sideimage1}
              backgroundSize="cover"
              borderRightRadius="5px"
            ></Box>
          </Box>

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
                <Box w="70%" p="20px" color="white">
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                  </Text>
                </Box>
                <Box
                  w="30%"
                  h="140px"
                  backgroundImage={sideimage1}
                  backgroundSize="cover"
                  borderRightRadius="5px"
                ></Box>
              </Box>
        </Box>
      </Box>
    </>
  );
};
export default SecretofSuccessSection2;
