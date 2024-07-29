import React from "react";
import {Box} from '@chakra-ui/react'
import SecretofSuccessSection1 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection1";
import SecretofSuccessSection2 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection2";
import SecretofSuccessSection3 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection3";
import SecretofSuccessSection4 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection4";
import SecretofSuccessSection5 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection5";
const SecretofSuccess=()=>{
return(
  <>
  <Box  p='0' m='0' boxSizing="border-box" cursor='pointer' mt='100px'>
   <SecretofSuccessSection1/>
    <SecretofSuccessSection4/>
    <SecretofSuccessSection2/> 
    <SecretofSuccessSection3/>
    <SecretofSuccessSection5/>
  </Box>
  </>
);
}
export default SecretofSuccess;