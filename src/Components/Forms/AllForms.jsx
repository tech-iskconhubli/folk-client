import { Box ,Button,Heading,Image,Input,Stack,Text} from '@chakra-ui/react'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {  useLocation } from 'react-router-dom';
const AllForms = () => {
   
  return (
    <>
        <Box border={"2px solid transparent"} height={"auto"} boxSizing="border-box" padding={["","","","0px 0px 0px 17%"]} fontFamily={"form"}>
            <Box border={"2px solid transparent"} display={["","","","flex"]} gap={"20px"} >
                <Box width={"0.2%"} height={"auto"} bgColor={"lightblue"}></Box>
                <Box position={"related"} width={["","","","60%"]} boxSizing='border-box' p={["","","","20px 0px 0px 20px"]}>
                    <Box display={"flex"} alignItems={"center"} gap={'10px'}> 
                        <Image boxShadow='md' p='2' rounded='md' bg='white' width={"60px"} src="https://cdn.razorpay.com/logos/Hgf1NYn8gduDU2_large.jpg" alt="" />
                        <Text fontSize={"20px"} fontWeight={"600"}>Hare Krishna Movement India</Text>
                    </Box>
                    <Box boxSizing='border-box' p={["","","",""]}>
                        <Heading fontFamily={"form"} fontWeight={"500"} m={"30px 0px 15px 0px"}>Yoga For Happiness</Heading>
                        <hr  style={{width:'50px', backgroundColor:"blue",padding:'2px'}}/>
                        <Image mt={["","","","40px"]}  width={"460px"} src={"https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/whatsapp%20image%202023-07-14%20at%2013.50.05_mdc55alb71v3qv.jpeg"}/>
                        
                        <Box width={["","","","500px"]}>
                            <Text m={"30px 0px 15px 0px"} fontSize={"22px"} fontWeight={"600"}>Yoga for Happiness</Text>
                        <i>Doesn’t this statement look promising? </i>
                       <br /><br />
                       <Text fontSize={"15px"}>We are all by nature filled with joy. Yoga for Happiness will equip you with invincible tools for leading a life of seamless joy. The workshop starts generally on a Saturday evening, includes night stay in the temple and continues till the Sunday afternoon. <br /> <br />To help you achieve the desired end, 6 essential principles have been highlighted in the program Happiness is by choice - Not by chanceMake the choice and be a part of this wonderful workshop
                           <br />
                           <br />
                            <ul style={{marginLeft:"15px"}}>
                                <li>Does God exist?</li>
                                <li>Why bad things happen to good people?</li>
                                <li>Yoga for modern age.</li>
                                <li>Reincarnation Fact or fiction.</li>
                                <li>Pursuit of Real Happiness</li>
                                <li>Purpose of human life</li>
                            </ul>
                            <br />
                            <br />
                            Happiness is by choice - Not by chance Make the choice and be a part of this wonderful workshop
                        </Text>

                        <Text m={"30px 0px 5px 0px"} fontSize={"18px"} fontWeight={"600"}>Contact Us</Text>
                        <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                            <MdEmail/>fol50gmail.com
                        </Box>
                        <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                            <FaPhoneAlt/>50908653423
                        </Box>

                        <Text   m={"30px 0px 5px 0px"}  fontSize={"18px"} fontWeight={"600"}>Terms And conditions</Text>
                        <Text fontSize={"15px"} mb={"30px"}>You agree to share information entered on this page with Hare Krishna Movement India (owner of this page) and Razorpay, adhering to applicable laws.</Text>
                        </Box>
                    </Box>
                    <Box  boxShadow='lg' p='6' rounded='md' bg='white' top={["","","","90px"]} bottom={["-730px","","",""]} right={["","","","330px"]} position={"absolute"} border={"2px solid transprent"} height={"700px"} width={["100%","","","500px"]}>

                        <Box position={"related"}>
                        <Heading fontSize={"19px"} fontFamily={"form"} fontWeight={"600"} m={"0px 0px 10px 0px"}>Payment Details</Heading>
                        <hr  style={{width:'50px', backgroundColor:"blue",padding:'2px'}}/>
                        </Box>

                        <Stack gap={"30px"} mt={"20px"}>
                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Name</Text>
                                <Input/>
                            </Box> 

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>WatsAppNumber</Text>
                                <Input/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Email</Text>
                                <Input/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Age</Text>
                                <Input/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Collage or Company</Text>
                                <Input/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Branch and year</Text>
                               <Box position={"relative"}>
                                <Input width={["200px","","","290px"]}/>
                                <br /><br />
                                <i  style={{position:"absolute", bottom:"0px", left:"10px"}}>(If you are a student)</i>
                               </Box>
                            </Box> 
                           
                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Register Amount</Text>
                                <Input/>
                            </Box> 
                           
                           <Box position={"absolute"} border={"2px solid transparent"} bottom={"-2px"} left={"-2px"} width={"100%"} display={"flex"}>
                            <Box width={["","","","58%"]} bgColor={"lightgray"} boxSizing='border-box' p={"20px"}>
                                <Image width={"200px"} src='https://cdn.razorpay.com/static/assets/pay_methods_branding.png'/>
                            </Box>
                            <Box  width={["","","","30%"]}><Button p={"28px 74px"} border={"none"} borderRadius={"0px"} bgColor={"blue"} color={"white"} textAlign={"center"}>pay &#x20b9; 100</Button></Box>
                            
                           </Box>

                        </Stack>

                    </Box>
                </Box>
                <Box width={["","","","40%"]}>
                <Image display={["none","none","none","block"]}   mt={["40px","","","0px"]}  height={["100%","","","100%"]} objectFit={"cover"} src="https://github-production-user-asset-6210df.s3.amazonaws.com/70562454/342214933-ec965229-cdf3-4c90-88e3-14a2d87c502d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240624T054702Z&X-Amz-Expires=300&X-Amz-Signature=99af3bae129a1a1c713d60d88a36f83d45cbaa16eca1355e511e84d1b38e918e&X-Amz-SignedHeaders=host&actor_id=70562454&key_id=0&repo_id=817129660"/>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default AllForms