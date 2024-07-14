import React from "react";
import theme from "../../theme";
import sideimage from "../../Assets/sosimage3.jpg";
import { Box, Text } from "@chakra-ui/react";
const SecretofSuccessSection3 = () => {
  <>
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
            backgroundImage={sideimage}
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
                  backgroundImage={sideimage}
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
                  backgroundImage={sideimage}
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
  </>;
};
export default SecretofSuccessSection3;
