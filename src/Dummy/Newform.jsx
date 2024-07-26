import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
const Newform = () => {
  return (
    <>
      <Box>
        <Box 
        
        bgColor={"#f8f8ff"}
          height={"99vh"}
          boxSizing="border-box"
          p={["0px", "", "", "", "100px 200px"]}
        >
          <Box display={["","","","","flex"]} justifyContent={"center"} gap={"10px"} >
            <Box width={["","","","","50%"]} border={"2px solid transpreant"}  boxSizing="border-box" p={["0px 10px","","","",""]}>
              <Text
               color={theme.colors.col.secondary}
                m={"5px 0px"}
                
                fontWeight={600}
                fontSize={"17px"}
                fontFamily={theme.fonts.body}
              >
                25-12-2024
              </Text>

              <Heading
                fontSize={["40px","","","","40px"]}
                fontWeight={600}
                fontFamily={theme.fonts.body}
              >
                Yoga for Happiness
              </Heading>
              <Image
                borderRadius={"9px"}
                m={"30px 0px"}
               
                width={"450px"}
                height={"550px"}
                objectFit={"cover"}
                src="https://backofficeapi.neuro-flash.com/api/v1/image-generations/07afa6791951dfe74e136805379ecae9/view"
              />
              <Text
                m={"20px 0px"}
                fontSize={"16px"}
                fontFamily={theme.fonts.body}
                fontWeight={300}
              >
                {" "}
                Calculate the average rating for each product and sort the
                products by their average rating in descending order. Calculate
                the total quantity and average price for products in each
                category and sort the categories by total quantity in descending
                order.
              </Text>
            </Box>
            <Box  width={["","","","","50%"]} border={"2px solid transpreant"} bgColor={"##fffafa"}>
              <Box
            
                boxShadow="lg"
                p="6"
                rounded="lg"
                bg="white"
                m={"auto"}
                height={"auto"}
                width={["98%", "", "90%", "80%", "500px"]}
              >
                <Box>
                  <Heading
                    fontSize={"30px"}
                    fontFamily={theme.fonts.body}
                    fontWeight={"600"}
                    m={"0px 0px 10px 0px"}

                    
                  >
                    Yoga for Happiness
                  </Heading>
                  <hr
                    style={{
                      width: "50px",
                      backgroundColor: "blue",
                      padding: "2px",
                    }}
                  />
                </Box>

                <Stack  gap={"40px"} mt={"40px"}>
                  <Box
                    display={"flex"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    <Text width={["70%", "", "", "55%"]} fontSize={"14px"} fontWeight={300} fontFamily={theme.fonts.body}>Name</Text>
                    <Input />
                  </Box>

                  <Box
                    display={"flex"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    <Text width={["70%", "", "", "55%"]} fontSize={"14px"} fontWeight={300} fontFamily={theme.fonts.body}>WatsAppNumber</Text>
                    <Input />
                  </Box>

                  <Box
                    display={"flex"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    <Text width={["70%", "", "", "55%"]} fontSize={"14px"} fontWeight={300} fontFamily={theme.fonts.body}>Email</Text>
                    <Input />
                  </Box>

                  <Box
                    display={"flex"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    <Text width={["70%", "", "", "55%"]} fontSize={"14px"} fontWeight={300} fontFamily={theme.fonts.body}>Age</Text>
                    <Input />
                  </Box>

                  <Box
                    display={"flex"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    <Text width={["70%", "", "", "55%"]} fontSize={"14px"} fontWeight={300} fontFamily={theme.fonts.body}>
                      Collage or Company
                    </Text>
                    <Input />
                  </Box>

                  <Box
                    display={"flex"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    <Text width={["70%", "", "", "55%"]}fontSize={"14px"} fontWeight={300} fontFamily={theme.fonts.body} >
                      Branch and year
                    </Text>
                    <Box position={"relative"}>
                      <Input width={["200px", "", "370px", "500px", "290px"]} />
                      <br />
                      <br />
                      <i
                        style={{
                          position: "absolute",
                          bottom: "0px",
                          left: "10px",
                          fontSize:"14px",
                          fontWeight:"300"
                        }}
                      >
                        (If you are a student)
                      </i>
                    </Box>
                  </Box>

                  <Box
                    display={"flex"}
                    gap={"20px"}
                    justifyContent={"space-between"}
                  >
                    <Text width={["70%", "", "", "55%"]} fontSize={"14px"} fontWeight={300} fontFamily={theme.fonts.body}>Register Amount</Text>
                    <Input />
                  </Box>

                  <Box border={"2px solid transparent"}>
                    {/* <Box width={["","","","80%","58%"]} bgColor={"lightgray"} boxSizing='border-box' p={"20px"}>
        <Image width={"200px"} src='https://cdn.razorpay.com/static/assets/pay_methods_branding.png'/>
    </Box> */}
                    <Box>
                      <Button
                        p={["20px 120px","","","","20px 180px"]}
                        fontSize={"20px"}
                        bgColor={theme.colors.col.secondary}
                        color={"white"}
                      >
                        pay &#x20b9; 100
                      </Button>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Newform;
