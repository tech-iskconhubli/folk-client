import React from "react";
import { Box, Text } from "@chakra-ui/react";
import image1 from "../../Assets/sosimage1.jpg";
import image2 from "../../Assets/sosimage2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
const SecretOfSuccess = () => {
  const card1 = useRef();
  const { contextSafe } = useGSAP({ scope: card1 });
  const handlecard1 = contextSafe(() => {
    gsap.to(card1.current, { x: 145, duration: 0.5 });
  });
  const handlecard1leave = contextSafe(() => {
    gsap.to(card1.current, { x: 0, duration: 0.5 });
  });
  return (
    <>
      <Box mt="150px">
        <Box
          boxSizing="border-box"
          p="0"
          m="0"
          bg="#F0EAD6"
          h="600px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="200px"
        >
          <Box
            w="60%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="70%"
              h="600px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap='15px'
            >
              <Box
                w="90%"
                h="140px"
                p="20px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg='#DE8D38'
                textAlign='justify'
                gap='30px'
                borderRadius='5px'
                
              >
                {/* <Box>heading</Box> */}
                <Box>
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                    nesciunt eum excepturi consequuntur facilis commodi
                    veritatis facere laudantium eos at, incidunt labore pariatur
                  </Text>
                </Box>
              </Box>

              <Box
                w="90%"
                h="140px"
                p="20px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg='#DE8D38'
                textAlign='justify'
                gap='30px'
                borderRadius='5px'
                
              >
                {/* <Box>heading</Box> */}
                <Box>
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                    nesciunt eum excepturi consequuntur facilis commodi
                  </Text>
                </Box>
              </Box>

              <Box
                w="90%"
                h="140px"
                p="20px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg='#DE8D38'
                textAlign='justify'
                gap='30px'
                borderRadius='5px'
              >
                {/* <Box>heading</Box> */}
                <Box>
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                    nesciunt eum excepturi consequuntur facilis commodi
                  </Text>
                </Box>
              </Box>

              <Box
                w="90%"
                h="140px"
                p="20px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg='#DE8D38'
                textAlign='justify'
                gap='30px'
                borderRadius='5px'
              >
                {/* <Box>heading</Box> */}
                <Box>
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum quae at neque labore! Rem dolor modi fugiat
                    nesciunt eum excepturi consequuntur facilis commodi
                  </Text>
                </Box>
              </Box>

            </Box>
            <Box w="30%" h="600px" backgroundImage={image2} backgroundSize='cover'></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SecretOfSuccess;
