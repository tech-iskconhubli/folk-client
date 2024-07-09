import { Box ,Button,Heading,Image,Input,Stack,Text, useStatStyles} from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import image from "../../Assets/download.png"
import { useDispatch } from 'react-redux';
import { getArtOfMindFormData, postArtOfMindFormData, postSecretOFSuccessFormData } from '../../Redux/app/action';
const ArtOFMindForm = () => {

    const init ={
        name:"",
        watsAppNumber:"",
        email:"",
        age:"",
        collageOrCompany:"",
        BranchOfYear:"",
       
    }

    const [formData,setFormData] = useState(init);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {name,value} = e.target;
        const payload = {
            ...formData,
            [name]:value
        }

        setFormData(payload)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postArtOfMindFormData(formData))
        .then(res=>{
            console.log("res", res)
        })
        console.log(formData)
    }
   
  return (
    <>
        <Box mt={"150px"}  border={"2px solid transparent"} height={"auto"} boxSizing="border-box" padding={["","","","0px 0px 0px 0px","0px 0px 0px 17%"]} fontFamily={"form"}>
            <Box width={["95%","","90%","80%","100%"]} m={"auto"}   display={["","","","flex"]} gap={"20px"} >
                <Box width={"0.2%"} height={"auto"} bgColor={"lightblue"}></Box>
                <Box position={"related"} width={["","","","60%"]} boxSizing='border-box' p={["","","","20px 0px 0px 20px"]}>
                    <Box display={"flex"} alignItems={"center"} gap={'10px'}> 
                        <Image boxShadow='md' p='2' rounded='md' bg='white' width={"60px"} src="https://cdn.razorpay.com/logos/Hgf1NYn8gduDU2_large.jpg" alt="" />
                        <Text fontSize={"20px"} fontWeight={"600"}>Hare Krishna Movement India</Text>
                    </Box>
                    <Box boxSizing='border-box' p={["","","",""]}>
                        <Heading fontFamily={"form"} fontWeight={"500"} m={"30px 0px 15px 0px"}>Art Of Mind </Heading>
                        <hr  style={{width:'50px', backgroundColor:"blue",padding:'2px'}}/>
                        <Image ml={["","","15%","25%","0px"]} mt={["","","30px","","40px"]}  width={"460px"} src={"https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/whatsapp%20image%202023-07-14%20at%2013.50.05_mdc55alb71v3qv.jpeg"}/>
                        
                        <Box width={["","","","500px"]}>
                            <Text m={"30px 0px 15px 0px"} fontSize={"22px"} fontWeight={"600"}>Art of MInd</Text>
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
                    <Box  boxShadow='lg' p='6' rounded='md' bg='white' top={["","","","","100px"]}  m={"auto"} left={["","","","100px","850px"]} right={["","","","","330px"]} position={"absolute"}  height={"600px"} width={["98%","","90%","80%","500px"]}>

                        <Box position={"related"} height={"auto"}>
                        <Heading fontSize={"19px"} fontFamily={"form"} fontWeight={"600"} m={"0px 0px 10px 0px"}>Payment Details</Heading>
                        <hr  style={{width:'50px', backgroundColor:"blue",padding:'2px'}}/>
                        </Box>

                            <form onSubmit={handleSubmit}>
                        <Stack gap={"30px"} mt={"20px"} >
                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Name</Text>
                                <Input name='name' value={formData.name} onChange={handleChange} />
                            </Box> 

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>watsAppNumber</Text>
                                <Input name='watsAppNumber' value={formData.watsAppNumber} onChange={handleChange}/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Email</Text>
                                <Input name='email' value={formData.email} onChange={handleChange}/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Age</Text>
                                <Input name='age' value={formData.age} onChange={handleChange}/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Collage or Company</Text>
                                <Input name='collageOrCompany' value={formData.collageOrCompany} onChange={handleChange}/>
                            </Box> 
                           

                            <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","","50%"]}>Branch and year</Text>
                               <Box position={"relative"}>
                                <Input name='BranchOfYear' value={formData.branchYear} onChange={handleChange} width={["200px","","370px","500px","290px"]}/>
                                <br /><br />
                                <i  style={{position:"absolute", bottom:"0px", left:"10px"}}>(If you are a student)</i>
                               </Box>
                            </Box> 
                           
                            {/* <Box display={"flex"} gap={"20px"} justifyContent={"space-between"}>
                                <Text width={["70%","","","50%"]}>Register Amount</Text>
                                <Input/>
                            </Box>  */}
                           
                           <Box position={"absolute"} border={"2px solid transparent"} bottom={"-2px"} left={"-2px"} width={"100%"} display={"flex"}>
                            <Box width={["","","","80%","58%"]} bgColor={"lightgray"} boxSizing='border-box' p={"20px"}>
                                <Image width={"200px"} src='https://cdn.razorpay.com/static/assets/pay_methods_branding.png'/>
                            </Box>
                            <Box width={["100%", "100%", "100%", "30%"]}>
    <Button
        type="submit"
        p={["28px 106px", "28px 106px", "28px 220px", "28px 106px"]}
        border="none"
        borderRadius="0px"
        bg="blue"
        color="white"
        textAlign="center"
        width="100%"
    >
        ₹100
    </Button>
</Box>

                            
                           </Box>

                        </Stack>
                           </form>

                    </Box>
                </Box>
                <Box width={["","","","40%"]}>
                <Image display={["none","none","none","none","block"]}   mt={["40px","","","0px"]}  height={["100%","","","100%"]} objectFit={"cover"} src={image}/>
                </Box>
            </Box>
        </Box>
        
        {/* border={["2px solid orange","2px solid blue","2px solid green","2px solid red","2px solid black"]} */}


    </>
  )
}

export default ArtOFMindForm