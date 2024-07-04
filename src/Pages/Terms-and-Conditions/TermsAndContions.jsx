import React,{useState,useEffect} from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaChevronUp } from "react-icons/fa";
const TermsAndContions = () => {
  const [isVisible,setIsVisible]=useState(false)
  const toggleVisibility=()=>{
    if(window.pageYOffset>500||window.scrollY>500){
      setIsVisible(true)
    }
    else{
      setIsVisible(false)
    }
  }
  const scrollToTop=()=>{
    window.scrollTo({
      top:'0',
      behaviour:'smooth'
    });
  }

useEffect(() => {
  window.addEventListener('scroll', toggleVisibility);
  return () => {
      window.removeEventListener('scroll', toggleVisibility);
  };
}, []);
  return (
    <>
      <Box
        pt="50px"
        pl={{ base: "10px", md: "100px", lg: "200px", xl: "300px" }}
        pr={{ base: "10px", md: "100px", lg: "200px", xl: "300px" }}
        style={{
          textAlign: "justify",
          textJustify: "inter-word",
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: "1.5rem",
          fontSize: "16px",
        }}
        mt={{base:'80px',md:'80px',lg:'120px',xl:'120px'}}
      >
         {isVisible && (
        <Box position="fixed" bottom='120px' right='0px' w='45px' h='45px' bg="#DE8D38" borderTopLeftRadius='10px' borderBottomLeftRadius='10px'
        style={{transition:'all 0.5s ease-out'}} onClick={scrollToTop}><FaChevronUp style={{color:'white',fontSize:'30px',margin:'auto',paddingTop:'15px'}} />
        </Box>
        )}
        <Text fontSize={{base:'40px',md:'56px',xl:'56px'}} fontWeight={{base:'800',md:'700',xl:'700'}} style={{fontFamily:'Abel'}}>Terms and Conditions</Text>
        <br/><br/>
        <Box as="terms">
          <span style={{fontSize:'30px',fontFamily:'Abel' ,fontWeight:'700'}}>Terms</span>
          <Text>
            <br/>
            By accessing this Website, accessible from{" "}
            <a
              href="https://folknet.in"
              style={{ textDecoration: "none", color: "#DE8D38" }}
            >
              https://folknet.in
            </a>
            , you are agreeing to be bound by these Website Terms and Conditions
            of Use and agree that you are responsible for the agreement with any
            applicable local laws. If you disagree with any of these terms, you
            are prohibited from accessing this site. The materials contained in
            this Website are protected by copyright and trade mark law.
          </Text>
        </Box>
        <br/>
        <Box as="uselicense">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Use License</span>
          <Text>
          <br/>
            Permission is granted to temporarily download one copy of the
            materials on ISKCON Bangalore &#40;FOLK&#41;&#39;s Website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
            <ul style={{listStyleType:'square'}}>
            <br/>
              <li>modify or copy the materials;</li>
              <br/>
              <li>
                use the materials for any commercial purpose or for any public
                display;
              </li>
              <br/>
              <li>
                attempt to reverse engineer any software contained on ISKCON
                Bangalore &#40;FOLK&#41;&#39;s Website;
              </li>
              <br/>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <br/>
              <li>
                transferring the materials to another person or “mirror” the
                materials on any other server.
              </li>
            </ul>
            <br/>
            This will let ISKCON Bangalore &#40;FOLK&#41; to terminate upon
            violations of any of these restrictions. Upon termination, your
            viewing right will also be terminated and you should destroy any
            downloaded materials in your possession whether it is printed or any
            electronic format.
          </Text>
        </Box>
        <br/>
        <Box as="disclaimer">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Disclaimer</span>
          <Text>
            <br/>
            All the materials on ISKCON Bangalore &#40;FOLK&#41;&#39;s Website
            are provided <q>as is</q>. ISKCON Bangalore &#40;FOLK&#41; makes no
            warranties, may it be expressed or implied, therefore negates all
            other warranties. Furthermore, ISKCON Bangalore &#40;FOLK&#41; does
            not make any representations concerning the accuracy or reliability
            of the use of the materials on its Website or otherwise relating to
            such materials or any sites linked to this Website.
          </Text>
        </Box>
        <br/>
        <Box as="limitations">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Limitations</span>
          <Text>
            <br/>
            ISKCON Bangalore &#40;FOLK&#41; or its suppliers will not be held
            accountable for any damages that will arise with the use or
            inability to use the materials on ISKCON Bangalore
            &#40;FOLK&#41;&#39;s Website, even if ISKCON Bangalore
            &#40;FOLK&#41; or an authorize representative of this Website has
            been notified, orally or written, of the possibility of such damage.
            Some jurisdiction does not allow limitations on implied warranties
            or limitations of liability for incidental damages, these
            limitations may not apply to you.
          </Text>
        </Box>
        <br/>
        <Box as="revisions-errata">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Revisions and Errata</span>
          <Text>
            <br/>
            The materials appearing on ISKCON Bangalore &#40;FOLK&#41;&#39;s
            Website may include technical, typographical, or photographic
            errors. ISKCON Bangalore &#40;FOLK&#41; will not promise that any of
            the materials in this Website are accurate, complete, or current.
            ISKCON Bangalore &#40;FOLK&#41; may change the materials contained
            on its Website at any time without notice. ISKCON Bangalore
            &#40;FOLK&#41; does not make any commitment to update the materials.
          </Text>
        </Box>
        <br/>
        <Box as="links">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Links</span>
          <Text>
            <br/>
            ISKCON Bangalore &#40;FOLK&#41; has not reviewed all of the sites
            linked to its Website and is not responsible for the contents of any
            such linked site. The presence of any link does not imply
            endorsement by ISKCON Bangalore &#40;FOLK&#41; of the site. The use
            of any linked website is at the user&#39;s own risk.
          </Text>
        </Box>
        <br/>
        <Box as="site-terms-and-modifications">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Site Terms of Use Modifications</span>
          <Text>
            <br/>
            ISKCON Bangalore &#40;FOLK&#41; may revise these Terms of Use for
            its Website at any time without prior notice. By using this Website,
            you are agreeing to be bound by the current version of these Terms
            and Conditions of Use.
          </Text>
        </Box>
        <br/>
        <Box as="your-privacy">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Your Privacy</span>
          <Text>
            <br/>
            Please read our Privacy Policy at{" "}
            <a
              href="https://folknet.in/privacy-policy/"
              style={{ textDecoration: "none", color: "#DE8D38" }}
            >
              https://folknet.in/privacy-policy/.
            </a>
          </Text>
        </Box>
        <br/>
        <Box as="governing-law">
          <span style={{fontSize:'30px',fontFamily:'Abel',fontWeight:'700'}}>Governing Law</span>
          <Text>
            <br/>
            Any claim related to ISKCON Bangalore &#40;FOLK&#41;&#39;s Website shall be
            governed by the laws of India in without regards to its conflict of
            law provisions.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default TermsAndContions;
