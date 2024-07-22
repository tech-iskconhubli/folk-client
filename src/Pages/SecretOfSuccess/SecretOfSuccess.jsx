import React from "react";
import {Box} from '@chakra-ui/react'
import SecretofSuccessSection1 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection1";
import SecretofSuccessSection2 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection2";
import SecretofSuccessSection3 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection3";
import SecretofSuccessSection4 from "../../Components/SecretofSuccessRelated/SecretofSuccessSection4";
const SecretofSuccess=()=>{
return(
  <>
  <Box  p='0' m='0' boxSizing="border-box" cursor='pointer'>
   <SecretofSuccessSection1/>
    <SecretofSuccessSection4/>
    <SecretofSuccessSection2/> 
    <SecretofSuccessSection3/>
  </Box>
  </>
);
}
export default SecretofSuccess;